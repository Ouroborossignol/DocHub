import React, { Component } from 'react';

const CHOOSER_OPTIONS = {
    // success: function(files) {
    //     alert("Here's the file link: " + files[0].link)
    // },
    // cancel: function() {
    //
    // },

    linkType: "direct",
    multiselect: true,
    extensions: ['.pdf', '.doc', '.docx', 'images', 'documents', 'text'],
    folderselect: false,
};

const UPLOAD_URL = '/api/documents/dropbox'

class DropboxDocument {
    constructor(doc_id, name) {
        this.doc_id = doc_id
        this.name = name

        this.state = "CREATED"
        this.type = "DROPBOX"
    }

    upload(slug) {
        var formData = new FormData()

        formData.append('title', this.name)
        formData.append('docid', this.doc_id)
        formData.append('course', slug)

        this.tags.map(tag => {
            formData.append('tags', tag)
        })

        upload_form_data(formData, UPLOAD_URL)
    }

}


export default class DropboxChooser extends Component {
    on_success = (files) => {
        let documents = files.map(doc => (
            new DropboxDocument(doc.id, doc.name)
        ))
        console.log("New documents from Dropbox", documents)
        this.props.onFiles(documents)
    }

    on_cancel = () => {
        console.log("Cancel")
    }

    run_chooser = () => {
        var options = {...CHOOSER_OPTIONS, success: this.on_success, cancel: this.on_cancel}
        Dropbox.choose(options);
    }

    render = () => {
        return (<div>
            <button onClick={this.run_chooser} className="button success">
                <i className="fi-social-dropbox"></i>&nbsp;
                Importer depuis Dropbox
            </button>
        </div>)
    }
}
