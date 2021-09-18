import React, {useState} from 'react';
import FormInput from '../../components/FormInput/FormInput';
import { useMoralisFile } from 'react-moralis';
import Moralis from 'moralis'
import Button from '../../components/Button/Button';
import ImageInput from '../../components/ImageInput/ImageInput.component';

const NFTUpload = () =>{
    //loads nessecary methods from moralis
    const {error, isUploading, moralisFile, saveFile, saveIPFS} = useMoralisFile();

    //instansiates nft varibles and variable setters
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [ nftFile, setNFTFile] = useState("");

    //metadata object to be udpated and saved 
    const metadata = {
        name: "",
        description: "",
        nftFilePath: "",
        nftFileHash: ""
    }

    //function to be called when a user clicks on the "Create NFT button"
   async function saveNFTFile (name, description){
        const file = await saveFile("NFT file", nftFile,{
            saveIPFS: true
        })

        metadata.name = name;
        metadata.description = description;
        metadata.nftFileHash = file.hash();
        metadata.nftFilePath = file.ipfs();

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
            <Button onClick = {() => saveNFTFile(name, description)}>Create NFT</Button>
        </div>

    ))
}

export default NFTUpload;