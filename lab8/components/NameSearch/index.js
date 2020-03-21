class NameSearch extends React.Component {

    readName(event) {
      event.preventDefault();

        let element = document.querySelector("#pokemonName");

        fetch("/api/pokemon/name/" + element.value)
        .then((res) => {

            return res.json();
        })
        .then((processed) => {
            let reporting = document.querySelector("#reportingArea");

            if(processed.error) {
                reporting.innerHTML = processed.error;
            } else {
                reporting.innerHTML = processed.name;
                console.log(element.value);
            }
        });
        element.value = "";
    }

    render() {
        return(
            <div>
                <h2>Pokemon Name</h2>
                <form onSubmit= {this.readName}>
                    <input id="pokemonName" type="text" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default NameSearch;
