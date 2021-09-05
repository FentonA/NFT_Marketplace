import React, {useState} from 'react';
import FormInput from '../../components/FormInput/FormInput';
import { useMoralisFile } from 'react-moralis';
import Button from '../../components/Button/Button';
import ImageInput from '../../components/ImageInput/ImageInput.component';

const NFTUpload = () =>{
    const {error, isUploading, moralisFile, saveFile} = useMoralisFile();

    const [text, setText] = useState("");
    const [description, setDescription] = useState("");
    const [ nftFile, setNFTFile] = useState("");

    return((
        <div>
            <ImageInput
                onChange = {(event) => setNFTFile(event.currentTarget.value)}
            />
            <form>
                <FormInput
                    placeholder="text"
                    type="text"
                    value ={text}
                    onChange ={(event) => setText(event.currentTarget.value)}/>
                <FormInput
                    placeholder="description"
                    type="text"
                    value ={description}
                    onChange ={(event) => setDescription(event.currentTarget.value)}/>
            </form>
            <Button onClick = {() => saveFile("Nft Fi", nftFile,{saveIPFS: true})}>Create NFT</Button>
        </div>

    ))
}

export default NFTUpload;