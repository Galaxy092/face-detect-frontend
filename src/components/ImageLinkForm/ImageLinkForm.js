import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='white-f3'>
                {'Face detection'}
            </p>
            <div className='center'>
                <div className='form pa4-br3-shadow-5 center '>
                    <input className='f4-ba-br3-pa2-w-70 center' type='text' onChange={onInputChange} onKeyPress={(e) => {
						if (e.key === "Enter") {
							onButtonSubmit();
						}
					}} placeholder='paste iamge your url here'/>
                    <button id='enter'className='w-30-f4-ba-br3-link-ph3-pv2-dib-white-bg-light-blue grow'
                    onClick={onButtonSubmit}
                    >Detech</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;