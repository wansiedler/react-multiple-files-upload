import React, { Component } from 'react';
import axios from 'axios';

export default class FilesUploadComponent extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            imgCollection: []
        }
    }

    onFileChange(e) {
        this.setState({ imgCollection: e.target.files })
    }

    onSubmit(e) {
        e.preventDefault()

        var formData = new FormData();

        for (const key of Object.keys(this.state.imgCollection)) {
            formData.append('files', this.state.imgCollection[key])
        }
        this.state.imgCollection.length && formData.append('image', this.state.imgCollection[0])
        // axios.post("https://abx-ems.staging.ippen.space/s3/experiments/aaazset-the-experiment-name", formData, {
        axios.post("https://uiwibff.staging.ippen.space/widgetimages/aaazset-the-experiment-name", formData, {
        }).then(res => {
            console.log(res.data)
        }).catch(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="file" name="imgCollection" onChange={this.onFileChange} multiple />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
