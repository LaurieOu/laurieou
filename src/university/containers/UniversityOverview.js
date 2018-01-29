import React, {Component} from 'react';
import { Grid, Row, Col, Thumbnail } from "react-bootstrap";


export default class UniversityOverview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.universityOverview) {
      return (
        <div></div>
      )
    }
    return (
      <div>
        <h3>{this.props.universityOverview.Name}</h3>
        <p>Description: {this.props.universityOverview.Description}</p>
        <Grid>
          <Row>
            <Col>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={this.props.universityOverview.Attachment} alt="242x200">
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
