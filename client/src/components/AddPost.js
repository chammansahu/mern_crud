import React from "react";
import axios from 'axios';


import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
export default  class AddPost extends React.Component {
  // const [title, setTitle] = useState("");
  //   const [imageurl, setImageurl] = useState("");
  //   const [description, setDescription] = useState("");
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: "",
      description: "",
    };
  }
  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
    console.log(this.state.title);
  };
  handleUrlChange = (e) => {
    this.setState({ url: e.target.value });

  };
  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
    
  };
  clearFields=()=> {
    this.setState({ title: "" });
    this.setState({ url: "" });
    this.setState({ description: "" });
  }
  handleClick = () => {
    const post = {
      title: this.state.title,
      url: this.state.url,
      description: this.state.description,
    };
   axios.post('api/post/addpost',post).then(res=>alert(res.data)).then(err=>console.log(err))
    console.log(post);
    this.clearFields();
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <input
            onChange={this.handleTitleChange}
            value={this.state.title}
            type="text"
            placeholder="enter title ....."
            className="form-control m-3 "
          />
          <input
            
            onChange={this.handleUrlChange}
            value={this.state.url}
            type="imageurl"
            placeholder="enter url  ....."
            className="form-control m-3"
          />
          <textarea
           value={this.state.description}
            onChange={(e)=>this.handleDescriptionChange(e)}
            cols="30"
            rows="10"
            placeholder="neter details on the topic"
            className="form-control m-3"
          ></textarea>
          <button className="btn btn-success m-3 " onClick={this.handleClick}>
            add post
          </button>
        </div>
      </div>
    );
  }
};

