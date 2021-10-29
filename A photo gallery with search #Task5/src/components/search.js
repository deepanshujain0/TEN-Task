import React,{Component} from 'react';
import axios from 'axios';
import ImageResults from './imageResults';

class Search extends Component{
    state={
        searchText:'',
        apiUrl:'https://pixabay.com/api',
        apiKey:'24008265-08175652117f3794158c19a36',
        images:[]
    };
    onTextChange=(e)=>{
        const val=e.target.value;
        this.setState({[e.target.name]:val},()=>{
            if(val==='')
            {
                this.setState({images:[]});
            }
            else{
            axios
            .get(
                `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                    this.state.searchText
                }&image_type=photo&safesearch=true`
            )
            .then(res=>this.setState({images:res.data.hits}))
            .catch(err=>console.log(err));
            }
        });
    };
    render(){
        console.log(this.state.images);
        return(
            <div className="searchBox">
            <input type="text"
            style =
            {{
                marginLeft:580,
                marginTop:100,
               borderRadius:30,
               fontSize:30,
               outline:"none",
            }}
            placeholder="Search for images"
            name="searchText"
            value={this.state.searchText}
            onChange={this.onTextChange}

            />
<br />
{this.state.images.length>0?(<ImageResults images={this.state.images}/>):null}
            </div>

        )
    }
}



export default Search;