import './AddPostForm.css'
import {Component} from "react";
export class AddPostForm extends Component {
    state = {
        postTitle: '',
        postDescription: ''
    }
    handlePostTitleChange = (e) =>{
        this.setState({
            postTitle: e.target.value
        })
    }
    handlePostDescriptionChange = (e) =>{
        this.setState({
            postDescription: e.target.value
        })
    }
    createPost = () =>{
        const post = {
            id: this.props.blogArr.length +1,
            title: this.state.postTitle,
            description: this.state.postDescription,
            liked: false
        }
        this.props.addNewBlogPost(post)
    }

render(){

    return(
        <>
        <div className='overlay'>
            <div className='addFormDiv'>
                <div className='modalForm' >
                    <h1 class = 'headerModalForm'> Создание поста</h1>
                     <input
                      type="text"
                      placeholder="Заголовок поста"
                      name="email"
                      className="placeholderForm1"
                      value = {}
                      onChange = { handlePostTitleChange}
                      required
                      />
                      <input
                       type="text"
                       placeholder="Текст поста"
                       name="parol"
                       className="placeholderForm2"
                       value = {}
                       onChange = { handlePostDescriptionChange}
                       required
                    />
                    <button className="submit" type="submit" onClick={ createPost}> Добавить</button>
                </div>
            </div>
        </div>
        </>
    )
}
}