import React, {Component} from 'react';
import { invokeApig } from '../../libs/awsLib';

export default class University extends Component {
  constructor(props) {
    super(props);
    this.state = {
      university: null
    }
  }

  async componentDidMount() {
    try {
      const results = await this.getUniversity();
      this.setState({
        university: results,
        content: results.content
      });

      console.log("this.state.university", this.state.university);
    } catch (e) {
      alert(e);
    }
  }

  getUniversity() {
    return invokeApig({path: `/University/${this.props.match.params.universityName}`})
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}
