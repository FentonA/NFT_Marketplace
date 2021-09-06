import React, {useState} from 'react';
import FormInput from '../../components/FormInput/FormInput';
import { useMoralisFile } from 'react-moralis';
import Moralis from 'moralis'
import Button from '../../components/Button/Button';
import ImageInput from '../../components/ImageInput/ImageInput.component';

const NFTUpload = () =>{
    const {error, isUploading, moralisFile, saveFile, saveIPFS} = useMoralisFile();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [ nftFile, setNFTFile] = useState("");

    const metadata = {
        name: "",
        description: "",
        nftFilePath: "",
        nftFileHash: ""
    }

    const saveFileIPFS = async (f) => {
        console.log("File", f)
        const fileIpfs = await saveFile(f.name, nftFile.moralisFile.hash, {saveIPFS: true, throwOnError: true})

        if(moralisFile){
            console.log(moralisFile)
        }
        console.log(fileIpfs);
      }


    const handleFinal = () =>{
        saveFileIPFS(nftFile)
    }

   async function saveNFTFile (name, description){
        const file = await saveFile("NFT file", nftFile,{
            saveIPFS: true
        })

        metadata.name = name;
        metadata.description = description;
        // metadata.nftFileHash = file.hash();
        // metadata.nftFilePath = file.ipfs();

        const nftFileMetadata = await new Moralis.File("metadata.json", {base64 : btoa(JSON.stringify(metadata))})
        await saveFile({nftFileMetadata, saveIPFS: true})
        console.log(file);
    }

    return((
        <div>
            <ImageInput
                onChange = {(event) => setNFTFile(event.currentTarget.value)}
            />
            <form>
                <FormInput
                    placeholder="name"
                    type="text"
                    value ={name}
                    onChange ={(event) => setName(event.currentTarget.value)}/>
                <FormInput
                    placeholder="description"
                    type="text"
                    value ={description}
                    onChange ={(event) => setDescription(event.currentTarget.value)}/>
            </form>
            <Button onClick = {() => saveNFTFile(name, description, nftFile)}>Create NFT</Button>
        </div>

    ))
}

export default NFTUpload;