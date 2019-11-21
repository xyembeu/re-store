import React, {Component} from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css'; // see installation section above for versions of NPM older than 3.0.0
import src from './1.jpg'


export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            src,
            cropResult: null,
            rotation: 0
        };
        this.cropImage = this.cropImage.bind(this);
        this.onChange = this.onChange.bind(this);
        console.log('123')
    }


    onChange(e) {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            this.setState({src: reader.result});
        };
        reader.readAsDataURL(files[0]);
    }

    cropImage() {
        if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
            return;
        }
        this.setState({
            cropResult: this.cropper.getCroppedCanvas().toDataURL(),
        });
    }


    render() {
        console.log(this.state.rotation)
        return (
            <div>
                <div>
                    <input type="file" onChange={this.onChange}/>
                    <Cropper
                        style={{height: 300, width: 400}}
                        aspectRatio={1}
                        guides={false}
                        src={this.state.src}
                        ref={cropper => {
                            this.cropper = cropper;
                        }}
                    />
                </div>
                <div>
                    <div className="box">
                        <h1>
                            <span>Crop</span>
                            <button onClick={this.cropImage} style={{float: 'right'}}>
                                Crop Image
                            </button>
                        </h1>
                        <img src={this.state.cropResult} alt="cropped image"/>
                    </div>
                </div>
                <button onClick={() => {
                    this.setState(({rotation}) => {
                        return {
                            rotation: rotation === 270 ? 0 : rotation + 90
                        }
                    }, () => {
                        this.cropper.rotateTo(this.state.rotation)
                    })
                }
                }>Повернуть
                </button>
            </div>
        );
    }
}



