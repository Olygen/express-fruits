const React = require("react");
const Nav = require("../components/Nav");

class Index extends React.Component {
  render() {
    const { fruits } = this.props
    return(
      <div>
        <h1>Fruits Index Page</h1>
        <Nav link="/fruits/new" text="Create a Fruit"/>
        <Nav link="/vegetables" text="See vegetables" />
        <ul>
            {fruits.map((fruit, i) => {
                return (
                    <li key={i}>
                        The {" "}
                        <a href={`/fruits/${i}`}>
                            {fruit.name}
                        </a>{" "}
                        is {fruit.color} <br></br>
                        {fruit.readyToEat
                            ? `It is ready to eat`
                            : `It is not ready to eat`}
                        <br />
                    </li>
                );
            })}
        </ul>
    </div>
    )
  }
};

module.exports = Index;