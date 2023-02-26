import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.modules = {
			toolbar: [
		      [{ 'font': [] }],
		      [{ 'size': ['small', false, 'large', 'huge'] }],
		      ['bold', 'italic', 'underline', 'blockquote'],
		      [{'list': 'ordered'}, {'list': 'bullet'}],
		      [{ 'align': [] }],
		      [{ 'color': [] }, { 'background': [] }],
		      ['clean']
		    ]
		};

		this.formats = [
		    'font',
		    'size',
		    'bold', 'italic', 'underline', 'blockquote',
		    'list', 'bullet',
		    'align',
		    'color', 'background'
	  	];

	  	this.state = {
			comments: ''
		}

		this.rteChange = this.rteChange.bind(this);
	}

	rteChange = (content, delta, source, editor) => {
		console.log(editor.getHTML()); 
		console.log(editor.getText()); 
		console.log(editor.getLength()); 
	}

	render() {
	    return (
	      <div>
	        <ReactQuill theme="snow"  modules={this.modules}
				formats={this.formats} onChange={this.rteChange}
			value={this.state.comments || ''}/>
	      </div>
	    );
	}

}

export default App;
