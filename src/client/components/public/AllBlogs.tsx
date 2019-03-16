import * as React from "react";
import BlogPreviewCard from "./BlogPreviewCard";
import "../../scss/app";

export default class Alldata extends React.Component<
  IAlldataProps,
  IAlldataState
> {
  constructor(props: IAlldataProps) {
    super(props);
    this.state = {
      items: [],

      username: "",
      password: "",
      pages: ""
    };
  }

  async componentDidMount() {}

  onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch(
      `/pupRouter/?username=${this.state.username}&password=${
        this.state.password
      }&pages=${this.state.pages}`
    )
      .then(response => response.json())
      .then(data => {
        const items = data.index.map((_index: any, index: number) => ({
          price: data.price[index],
          time: data.time[index],
          comment: data.comment[index]
        }));

        this.setState({ items });
      }).catch(function(e) {
        console.log(e);
      });
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-center text-white">Median XL Miner</h1>
        <form
          className="form-group mt-5 border border-primary rounded p-3 shadow-lg bg-info"
          onSubmit={this.onSubmit}
        >
          <label className="mb-0">Username</label>
          <input
            type="text"
            value={this.state.username}
            className="input-group my-1 p-1"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.setState({ username: e.target.value })
            }
          />
          <label className="mb-0">Password</label>
          <input
            type="password"
            value={this.state.password}
            className="input-group my-1 p-1"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.setState({ password: e.target.value })
            }
          />
          <label className="mb-0">Pages To Mine</label>
          <input
            type="number"
            value={this.state.pages}
            className="input-group my-1 p-1"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.setState({ pages: e.target.value })
            }
          />
          <button className="btn btn-secondary mt-2 shadow">Go Mining!</button>
        </form>
        <div className="input-group mb-1 justify-content: space-between">
          <span className="input-group-text col-1 text-white bg-dark">#</span>
          <span className="input-group-text col-1 text-white bg-dark">
            Coins{" "}
          </span>

          <span className="input-group-text col-8 text-white bg-dark">
            Comment{" "}
          </span>
          <span className="input-group-text col-2 text-white bg-dark">
            Posted{" "}
          </span>
        </div>

        {this.state.items.map((item: Item, index: number) => {
          return (
            <BlogPreviewCard
              index={index}
              price={item.price}
              comment={item.comment}
              time={item.time}
            />
          );
        })}
      </main>
    );
  }
}

interface IAlldataProps {}

interface IAlldataState {
  password: string;
  username: string;
  items: Item[];
  pages: string;
}

interface Item {
  price: number;
  time: string;
  comment: string;
}
