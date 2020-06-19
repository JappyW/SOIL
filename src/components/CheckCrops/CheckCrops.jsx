import React, { Component } from "react";
import Map from "../reusableComponents/Map/Map.jsx";
import Select from "react-dropdown-select";
import "./checkCrops.scss";
import PlantsList from "../PlantsList/PlantsList.jsx";
import Accordion from "../Accordion/Accordion.jsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import PinDrop from "@material-ui/icons/PinDrop";
import Eco from "@material-ui/icons/Eco";
import List from "@material-ui/icons/List";
import StepConnector from "@material-ui/core/StepConnector";
import Typography from "@material-ui/core/Typography";
import { GrNext, GrPrevious } from "react-icons/gr";
import { AiOutlineInfoCircle } from "react-icons/ai";

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg, rgb(39, 151, 104) 0%, rgb(34, 134, 106) 50%, rgb(25, 49, 29) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg, rgb(39, 151, 104) 0%, rgb(34, 134, 106) 50%, rgb(25, 49, 29) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(39, 151, 104) 0%, rgb(34, 134, 106) 50%, rgb(25, 49, 29) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(39, 151, 104) 0%, rgb(34, 134, 106) 50%, rgb(25, 49, 29) 100%)",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <PinDrop />,
    2: <Eco />,
    3: <List />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

function getSteps() {
  return [
    "Choose your soil position",
    "Enter crops planted earlier",
    "Crops that can be planted successfuly",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Choose your soil position";
    case 1:
      return "Enter crops planted earlier";
    case 2:
      return "Crops that can be planted successfuly";
    default:
      return "Unknown step";
  }
}

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.getCropsForPlanting = this.getCropsForPlanting.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.state = {
      location: { lat: 49, lng: 25 },
      selectedOption1: null,
      selectedOption2: null,
      selectedOption3: null,
      activeStep: 0,
      showPlants: false,
    };
  }

  async componentDidMount() {
    await this.props.requestCropsFromDataBase();
    await this.props.requestCropsPH(this.state.location);
    await this.props.requestWeather(this.state.location);
  }

  handleNext = () => {
    this.setState({ activeStep: this.state.activeStep + 1 });
    if (this.state.activeStep === 1) {
      this.getCropsForPlanting();
    }
  };

  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 });
  };

  handleReset = () => {
    this.setState({
      location: { lat: 49, lng: 25 },
      selectedOption1: null,
      selectedOption2: null,
      selectedOption3: null,
      activeStep: 0,
      showPlants: false,
    });
  };

  handleSave = () => {
    let element = document.getElementById("save-btn");
    element.innerHTML = "<span>Saved</span>";
    const today = new Date();
    const dateString =
      today.getDate() +
      "." +
      (today.getMonth() + 1) +
      "." +
      today.getFullYear();
    this.props.requestAddUserCropsCheckQuery({
      crops: [
        this.state.selectedOption1,
        this.state.selectedOption2,
        this.state.selectedOption3,
      ],
      ph: this.props.soil.ph,
      temp: this.props.soil.temperature,
      plants: this.props.soil.plants,
      email: this.props.user.email,
      date: dateString,
    });
  };

  disableNextButton = () => {
    switch (this.state.activeStep) {
      case 0:
        return this.state.location ? true : false;
      case 1:
        return this.state.selectedOption1 &&
          this.state.selectedOption2 &&
          this.state.selectedOption3
          ? true
          : false;
      default:
        return true;
    }
  };

  onMapChange = (state) => {
    this.setState({
      location: state.location,
    });
    this.props.requestCropsPH(this.state.location);
    this.props.requestWeather(this.state.location);
  };

  async getCropsForPlanting() {
    await this.props.requestCropsForPlanting({
      crops: [
        this.state.selectedOption1,
        this.state.selectedOption2,
        this.state.selectedOption3,
      ],
      ph: this.props.soil.ph,
      temperature: this.props.soil.temperature,
    });
  }

  handleSelectChangeCrop1 = (selectedOption) => {
    this.setState({ selectedOption1: selectedOption[0] });
  };

  handleSelectChangeCrop2 = (selectedOption) => {
    this.setState({ selectedOption2: selectedOption[0] });
  };

  handleSelectChangeCrop3 = (selectedOption) => {
    this.setState({ selectedOption3: selectedOption[0] });
  };

  render() {
    const steps = getSteps();
    return (
      <div className="check-crops-main container-fluid">
        <Stepper
          alternativeLabel
          activeStep={this.state.activeStep}
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        {this.state.activeStep === steps.length ? (
          <div>
            <Typography className="fs30px">
              All steps completed - you&apos;re finished
            </Typography>
            <div className="check-buttons d-flex justify-content-center my-3">
              {this.props.isAuth ? (
                <button
                  id="save-btn"
                  onClick={this.handleSave}
                  className="btn btn-primary mr-5"
                  disabled={!this.props.isAuth}
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={this.handleSave}
                  className="btn btn-primary mr-5"
                  disabled={!this.props.isAuth}
                >
                  <span className="span-info" title="You need to sign in">
                    SAVE
                    <AiOutlineInfoCircle />
                  </span>
                </button>
              )}
              <button onClick={this.handleReset} className="btn btn-primary">
                Reset
              </button>
            </div>
          </div>
        ) : (
          <div className="row mt-3">
            <div className="col-md-1">
              <button
                disabled={this.state.activeStep === 0}
                onClick={this.handleBack}
                className="btn btn-primary btn-big"
              >
                <GrPrevious />
              </button>
            </div>
            <div className="col-md-10">
              <Typography className={" text-center mt-1 fs30px mb-2 p-0"}>
                <span className="bottom-line">
                  {getStepContent(this.state.activeStep)}
                </span>
              </Typography>
              {this.state.activeStep === 0 ? (
                <div className="map-container container-fluid d-flex justify-content-center align-items-center mt-3">
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
              ) : null}
              {this.state.activeStep === 1 ? (
                <div className="dropdown mt-5 d-flex justify-content-center">
                  <ul className="dropdown-list d-flex ">
                    <li className="dropdown-item">
                      <Select
                        key={this.props.soil.crops}
                        onChange={this.handleSelectChangeCrop1}
                        options={this.props.soil.crops}
                        labelField="name"
                      />
                    </li>
                    <li className="dropdown-item">
                      <Select
                        key={this.props.soil.crops}
                        onChange={this.handleSelectChangeCrop2}
                        options={this.props.soil.crops}
                        labelField="name"
                      />
                    </li>
                    <li className="dropdown-item">
                      <Select
                        key={this.props.soil.crops}
                        onChange={this.handleSelectChangeCrop3}
                        options={this.props.soil.crops}
                        labelField="name"
                      />
                    </li>
                  </ul>
                </div>
              ) : null}
              {this.state.activeStep === 2 ? (
                <div>
                  {this.props.soil.plants ? (
                    this.props.soil.plants.length > 0 ? (
                      <div className="check-crops-main mt-5">
                        <Accordion
                          title="Plants List"
                          id="plantsCollapse"
                          data={this.props.soil.plants}
                          Component={PlantsList}
                        />
                      </div>
                    ) : null
                  ) : null}
                </div>
              ) : null}
            </div>
            <div className="col-md-1">
              <button
                onClick={this.handleNext}
                className="btn btn-primary btn-big"
                disabled={!this.disableNextButton()}
              >
                {this.state.activeStep === steps.length - 1 ? (
                  "Finish"
                ) : (
                  <GrNext />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default FrontPage;
