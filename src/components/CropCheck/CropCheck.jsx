import React, { Component } from "react";
import Map from "../reusableComponents/Map/Map.jsx";
import Select from "react-dropdown-select";
import Button from "../reusableComponents/Button/index.js";
import { averagePh } from "../../helpers/index";
import "./cropCheck.scss";
import FertilizersList from "../FertilizersList/FertilizersList.jsx";
import Accordion from "../Accordion/Accordion.jsx";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { TiThermometer } from "react-icons/ti";
import { GiChemicalDrop } from "react-icons/gi";

class CropCheck extends Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.state = {
      location: { lat: 49, lng: 25 },
      selectedOption: null,
    };
  }

  async componentDidMount() {
    await this.props.requestCropsFromDataBase();
    await this.props.requestCropsPH(this.state.location);
    await this.props.requestWeather(this.state.location);
  }

  onMapChange = async (state) => {
    this.setState({
      location: state.location,
    });
    await this.props.requestCropsPH(this.state.location);
    await this.props.requestWeather(this.state.location);
  };

  async onButtonClick() {
    await this.props.requestWeather(this.state.location);
    await this.props.requestCropPlantability({
      crop: [this.state.selectedOption1],
      ph: this.props.soil.ph,
      temperature: this.props.soil.temperature,
    });
  }

    saveQuery = () => {
    let element = document.getElementById("save-btn");
    element.innerHTML = "<span>Saved</span>";
    const today = new Date();
    const dateString =
      today.getDate() +
      "." +
      (today.getMonth() + 1) +
      "." +
      today.getFullYear();
    const hint = this.props.soil.plant.temp
      ? this.props.soil.plant.ph
        ? "Ph and temperature arent good"
        : "Temperetare inst good"
      : "Ph level isnt good";
    this.props.requestAddUserCheckCropQuery({
      crops: this.state.selectedOption1,
      ph: this.props.soil.ph,
      temp: this.props.soil.temperature,
      fertilizers: this.props.soil.fertilizers,
      email: this.props.user.email,
      date: dateString,
      hint,
    });
  };

  handleSelectChangeCrop1 = (selectedOption) => {
    this.setState({ selectedOption1: selectedOption[0] });
  };

  render() {
    return (
      <div className="mt-5">
        <div className="map-container container-fluid d-flex justify-content-center">
          <Map
            className="googleMap"
            mapGetStateToParent={this.onMapChange}
            center={this.state.location}
            mapState={this.state.location}
            height="35rem"
            width="50rem"
            zoom={10}
            readOnly={false}
            autocomplete={true}
          />
        </div>
        <div className="dropdown container d-flex justify-content-center mt-5">
          <div className="dropdown-list mt-4">
            <Select
              key={this.props.soil.crops}
              onChange={this.handleSelectChangeCrop1}
              options={this.props.soil.crops}
              labelField="name"
            />
          </div>
        </div>
        <div className="check-buttons d-flex justify-content-center my-3">
          <Button
            className="btn btn-primary mr-5"
            label="CHECK"
            handleClick={this.onButtonClick}
            disabled={!this.state.selectedOption1}
          />
          {this.props.isAuth ? (
            <Button
              id="save-btn"
              className="btn btn-primary"
              label="SAVE"
              disabled={!this.props.soil.plant.ph && !this.props.isAuth}
              handleClick={this.saveQuery}
            />
          ) : (
            <button
              className="btn btn-primary"
              disabled={!this.props.soil.plant.ph && !this.props.isAuth}
              handleClick={this.saveQuery}
            >
              <span className="span-info" title="You need to sign in">
                SAVE
                <AiOutlineInfoCircle />
              </span>
            </button>
          )}
        </div>
        <div className="crop-plantability-info">
          <div className="tips mb-4 container w-50 bg-dark-cr p-3">
            {this.props.soil.ph ? (
              <h3 className="text-center">
                Ph level is {averagePh(this.props.soil.ph)}
              </h3>
            ) : null}
            {!this.props.soil.plant.temp && this.state.selectedOption1 ? (
              <div className="text-center">
                Temperature does not satisfy plants needs
                <p>
                  <TiThermometer className="mr-1" />
                  {this.state.selectedOption1.bestTempMin +
                    " - " +
                    this.state.selectedOption1.bestTempMax +
                    "°C"}
                </p>
              </div>
            ) : null}
          </div>
          {!this.props.soil.plant.ph ? (
            this.props.soil.fertilizers ? (
              <Accordion
                id="fertilizersCollapse"
                title="Fertilizers"
                Component={FertilizersList}
                data={this.props.soil.fertilizers}
              />
            ) : null
          ) : null}
        </div>
      </div>
    );
  }
}

export default CropCheck;
