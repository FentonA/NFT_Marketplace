import React from 'react';
import DropZone from './DropZone.component';
import './ImageInput.styles.scss'


const ImageInput = ({handleChange, label, ...otherprops}) =>(    
    <div className="group">
        <p className="title">Drag the file that you want to upload here...</p>
        <div className="content">
            <DropZone/>
        </div>
    </div>
)
export default ImageInput;