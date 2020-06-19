import React from "react";
import PropTypes from "prop-types";
import FilterResults from "react-filter-search";
import CanvasJSReact from "../../helpers/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import Thermometer from "react-thermometer-component";
import PlantsList from "../PlantsList/PlantsList.jsx";
import FertilizersList from "../FertilizersList/FertilizersList.jsx";
import Accordion from "../Accordion/Accordion.jsx";
import "./userQueries.scss";

class ListOfOtherUserOrders extends React.Component {
  constructor(props) {
    super(props);
    this.requestUserQueries = this.requestUserQueries.bind(this);
    this.state = {
      value: "",
    };
  }

  componentDidMount() {
    this.requestUserQueries();
  }

  async requestUserQueries() {
    if (this.props.type === "CHECK_CROP") {
      await this.props.requestUserCheckCropQueries(this.props.user.email);
    } else {
      await this.props.requestUserCropsCheckQueries(this.props.user.email);
    }
  }

  handleSearchChange = (event) => {
    const { value } = event.target;
    this.setState({ value });
  };

  insertDataIntoGraph = (query) => {
    return {
      backgroundColor: "#20201d",
      animationEnabled: true,
      theme: "dark2",
      title: {
        text: "PH in water",
      },
      creditText: "",
      width: 200,
      height: 150,
      axisY: {
        title: "Depth in cm",
        includeZero: false,
        gridThickness: 0,
      },
      data: [
        {
          type: "spline",
          showInLegend: true,
          legendText: "PH value",
          dataPoints: [
            { x: 10, y: query.ph.sl1 },
            { x: 20, y: query.ph.sl2 },
            { x: 30, y: query.ph.sl3 },
            { x: 40, y: query.ph.sl4 },
            { x: 50, y: query.ph.sl5 },
            { x: 60, y: query.ph.sl6 },
            { x: 70, y: query.ph.sl7 },
          ],
        },
      ],
    };
  };

  insertDataIntoTherm = (query) => {
    let tempAverage = 0;
    query.temp.map((item) => (tempAverage += item));
    tempAverage = tempAverage / query.temp.length;
    return tempAverage.toPrecision(2);
  };

  objectToArray = (object) => {
    let array = [];
    if (object.hasOwnProperty("0")) {
      for (let index in object) {
        array[index] = object[index];
      }
    } else {
      array[0] = object;
    }
    return array;
  };

  render() {
    const { value } = this.state;
    return (
      <div id="accordion" className="list-studios w-100">
        {this.props.queries ? (
          <div>
            <input
              className="form-control orders-search mb-3"
              placeholder="Search..."
              type="text"
              value={value}
              onChange={this.handleSearchChange}
            />
            <FilterResults
              value={value}
              data={this.props.queries}
              renderResults={(results) => (
                <div>
                  {results.length > 0 ? (
                    <div className="orders-exist">
                      {results.map((query) => (
                        <div key={query.id} className="card my-2">
                          <div
                            className="card-header d-flex justify-content-between align-items-center"
                            id="headingOne"
                          >
                            <button
                              className="btn btn-link text-btn"
                              data-toggle="collapse"
                              data-target={`#collapse${query.id}`}
                              aria-expanded="true"
                              aria-controls={`collapse${query.id}`}
                            >
                              <span className="mr-1 icon"></span>
                              <span className="mr-4 query-name">
                                {query.date +
                                  " - " +
                                  (query.type === "CROPS_CHECK"
                                    ? "CHECKED CROPS FOR PLANTING"
                                    : "CHECKED IF CROP CAN BE PLANTED")}
                              </span>
                              <span className="query-date"></span>
                            </button>
                          </div>
                          <div
                            id={`collapse${query.id}`}
                            className="collapse"
                            aria-labelledby="headingOne"
                            data-parent="#accordion"
                          >
                            <div className="card-body p-5">
                              <div className="queries-header text-center"></div>
                              <div className="container d-flex flex-column align-items-center justify-content-center p-2">
                                <div className="row queries-row">
                                  <div className="col-md-3 d-flex flex-column align-items-center">
                                    <CanvasJSChart
                                      options={this.insertDataIntoGraph(query)}
                                    />
                                    <div className="mt-5">
                                      <Thermometer
                                        theme="light"
                                        value={this.insertDataIntoTherm(query)}
                                        max="50"
                                        format="°C"
                                        size="small"
                                        height="100"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-9 crops-cards">
                                    <PlantsList
                                      data={this.objectToArray(query.crops)}
                                    />
                                  </div>
                                </div>
                                {Object.keys(query.plants).length !== 0 ? (
                                  <div className="container">
                                    <Accordion
                                      id="plantsCollapse"
                                      title="Plants List"
                                      data={this.objectToArray(query.plants)}
                                      Component={PlantsList}
                                    />
                                  </div>
                                ) : null}

                                {query.hint ? (
                                  <div className="text-center card w-50 mb-3">
                                    <h3>{query.hint}</h3>
                                  </div>
                                ) : null}

                                {Object.keys(query.fertilizers).length !== 0 ? (
                                  <div className="container">
                                    <Accordion
                                      id="fertilizersCollapse"
                                      title="Fertilizers List"
                                      data={this.objectToArray(
                                        query.fertilizers
                                      )}
                                      Component={FertilizersList}
                                    />
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="container text-center items-do-not-exist">
                      Nothing is found
                    </div>
                  )}
                </div>
              )}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

ListOfOtherUserOrders.propTypes = {
  requestUserCabinetPaidOrders: PropTypes.func,
  requestUserCabinetCompletedOrders: PropTypes.func,
  orders: PropTypes.array,
  user: PropTypes.object,
  requestedOrders: PropTypes.any,
};

export default ListOfOtherUserOrders;
