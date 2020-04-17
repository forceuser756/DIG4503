import Link from 'next/link'
class TypeSearch extends React.Component {
  constructor(props) {
    super(props);
  }

    getType = () => {

        let type = document.querySelector('#typeList').value;
        console.log(type)

        fetch("http://localhost:3000/api/pokemon/typeList/" + type)
        .then((res) => { return res.json() })
        .then((processed) => {
          let reporting =document.querySelector("#reportingArea");
            this.props.callback(processed)
            console.log(processed)
        });

    }

    render() {
        return(
          <div>
              <form onSubmit={this.getType}>
                  <input id= "name" type="text" placeholder="Pokemon type"/>
                  <button>Submit</button>
              </form>
          </div>
        );
    }

}

export default TypeSearch;
