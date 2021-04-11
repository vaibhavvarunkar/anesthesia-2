import React, { useState, useEffect } from "react";
import Header from "../CustomComponent/Header";
import Tab from "../CustomComponent/Tab";
import "../css/AllAction.css";
import "../css/casesummary.css";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import closecase from "../images/closeCase.png";
import SaveCaseModal from "../CustomComponent/SaveCaseModal";
import SaveCaseNameModal from "../CustomComponent/SaveCaseNameModal";
import BurgerMenuModal from "../CustomComponent/BurgerMenuModal";
const optionsforage = [
  { value: "Y", label: "Year" },
  { value: "M", label: "Month" },
  { value: "D", label: "Day" },
];
const optionsforgender = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const optionsForHeight = [
  { value: "CM", label: "Centimeter" },
  { value: "IN", label: "Inch" },
];

const optionsForWeight = [
  { value: "KG", label: "Kilogram" },
  { value: "G", label: "Gram" },
];

const CaseSummary = () => {
  const [ageType, setageType] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [patientTypeArray, setpatientTypeArray] = useState([]);
  const [patientType, setPatientType] = useState(null);

  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [surgeryTypeArray, setsurgeryTypeArray] = useState([]);
  const [surgeryType, setsurgeryType] = useState([]);
  const [sub_surgeryArray, setsub_surgeryArray] = useState([]);
  const [surgerySubType, setsurgerySubType] = useState(null);
  const [anesthesia_type_list, setanesthesia_type_list] = useState([]);
  const [anesthesia_type, setanesthesia_type] = useState(null);
  const [anesthesiaSubType, setanesthesiaSubType] = useState(null);
  const [subanesthesia_type, setsubanesthesia_type] = useState([]);
  const [subQuestionClick, setsubQuestionClick] = useState(true);
  const [subQuestionNo, setsubQuestionNo] = useState(0);
  const [AsapaArray, setAsapaArray] = useState([]);
  const [asaps, setasaps] = useState([]);
  const [medicationsArray, setmedicationsArray] = useState([]);
  const [medication, setmedication] = useState(null);
  const [medicalHistory, setmedicalHistory] = useState([]);
  const [medicalSubHistory, setmedicalSubHistory] = useState([]);
  const [timeOfLastFoodOrDrink, settimeOfLastFoodOrDrink] = useState(null);
  const [ingestedMaterial, setingestedMaterial] = useState(null);
  const [nameVisble, setnameVisble] = useState(false);
  const [fileName, setFileName] = useState(null);
  const [surgeryHistoryArray, setsurgeryHistoryArray] = useState([]);

  const [surgeryHistory, setsurgeryHistory] = useState([]);
  const [sub_surgeryHistoryArray, setsub_surgeryHistoryArray] = useState([]);
  const [surgerySubHistory, setsurgerySubHistory] = useState(null);

  const [anesethesiaHistory, setanesethesiaHistory] = useState(null);
  const [anesethesiaSubHistory, setanesethesiaSubHistory] = useState(null);
  const [medicalHistoryArray, setmedicalHistoryArray] = useState([]);
  const [AllegriesArray, setAllegriesArray] = useState([]);
  const [allegries, setallegries] = useState([]);
  const [heightType, setheightType] = useState(null);
  const [weightType, setweightType] = useState(null);
  const [surgeryMultiSelection, setsurgeryMultiSelection] = useState(false);
  const [burgerMenu, setburgerMenu] = useState(false);

  useEffect(() => {
    getCaseSummary();
  }, []);

  const getCaseSummary = async () => {
    var token = sessionStorage.getItem("token");

    fetch(
      `http://ec2-18-189-0-11.us-east-2.compute.amazonaws.com/api/case-summary-form-data?device_type=Android&device_token=123`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        //  console.log(res.data.patient_type_list)
        res.data.patientTypes.forEach((element) => {
          element.value = element.id;
          element.label = element.type_name;
        });
        //    console.log(res.data.patient_type_list)
        setpatientTypeArray(res.data.patientTypes);
        res.data.surgeryTypes.forEach((element) => {
          element.value = element.id;
          element.label = element.name;
        });

        console.log(res.data.surgeryTypes);
        setsurgeryHistoryArray(res.data.surgeryTypes);
        setsurgeryTypeArray(res.data.surgeryTypes);
        res.data.anesthesiaTypes.forEach((element) => {
          element.value = element.id;
          element.label = element.name;
        });
        setanesthesia_type_list(res.data.anesthesiaTypes);

        res.data.asaPs.forEach((element) => {
          element.value = element.id;
          element.label = element.name;
        });

        setAsapaArray(res.data.asaPs);

        res.data.drugList.forEach((element) => {
          element.value = element.id;
          element.label = element.drug_name;
        });

        setmedicationsArray(res.data.drugList);

        setmedicalHistory(res.data.medicalHistories);
        res.data.drugList.forEach((element) => {
          element.value = element.id;
          element.label = element.drug_name;
        });

        console.log(res.data.drugList);
        setAllegriesArray(res.data.drugList);

        res.data.anesthesiaHistories.forEach((element) => {
          element.value = element.id;
          element.label = element.name;
        });
        setanesethesiaHistory(res.data.anesthesiaHistories);
      });
  };
  const handleChangeAgeTpe = (selectedOption) => {
    setageType(selectedOption.value);
    console.log(`Option selected:`, selectedOption);
  };

  const handleChangeGender = (selectedOption) => {
    setGender(selectedOption.value);
    console.log(`Option selected:`, selectedOption);
  };

  const handleChangePatientType = (selectedOption) => {
    setPatientType(selectedOption.value);
    console.log(`Option selected:`, selectedOption.id);
  };

  const handleChangeHeightType = (selectedOption) => {
    setheightType(selectedOption.value);
    console.log(`Option selected:`, selectedOption);
  };

  const handleChangeWeightType = (selectedOption) => {
    setweightType(selectedOption.value);
    console.log(`Option selected:`, selectedOption);
  };

  const handleChangeSurgeryType = (selectedOption) => {
    setsurgeryType(selectedOption);
    for (var j = 0; j < surgeryTypeArray.length; j++) {
      for (var i = 0; i < selectedOption.length; i++) {
        if (surgeryTypeArray[j].id === selectedOption[i].value) {
          console.log(surgeryTypeArray[j].surgery_sub_type);
          surgeryTypeArray[j].surgery_sub_type.forEach((element) => {
            element.value = element.id;
            element.label = element.name;
          });

          setsub_surgeryArray(surgeryTypeArray[j].surgery_sub_type);
        }
      }
    }
    /*for(var i=0;i<surgeryTypeArray.length;i++){
            console.log(selectedOption.value)
            if(surgeryTypeArray[i].id===selectedOption.value){
                surgeryTypeArray[i].surgery_sub_type.forEach(element => {
                    element.value=element.id;
                    element.label=element.name
                });
 
           setsub_surgeryArray(surgeryTypeArray[i].surgery_sub_type)
            }
        }*/
  };

  const handleChangesub_surgeryType = (selectedOption) => {
    setsurgerySubType(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const handleChangeAnesethesiaType = (selectedOption) => {
    setanesthesia_type(selectedOption);
    for (var j = 0; j < anesthesia_type_list.length; j++) {
      for (var i = 0; i < selectedOption.length; i++) {
        if (anesthesia_type_list[j].id === selectedOption[i].value) {
          anesthesia_type_list[j].anesthesia_sub_type.forEach((element) => {
            element.value = element.id;
            element.label = element.name;
          });

          console.log(anesthesia_type_list[j].anesthesia_sub_type);
          setsubanesthesia_type(anesthesia_type_list[j].anesthesia_sub_type);
        }
      }
    }
    /* for(var i=0;i<anesthesia_type_list.length;i++){
            if(anesthesia_type_list[i].id===selectedOption.value){
                anesthesia_type_list[i].anesthesia_sub_type.forEach(element => {
                    element.value=element.id;
                    element.label=element.name
                });
                
           //console.log(anesthesia_type_list[i].anesthesia_sub_type)
           setsubanesthesia_type(anesthesia_type_list[i].anesthesia_sub_type)
            }
        }*/
  };

  const handleChangesub_anesthesia_type = (selectedOption) => {
    setanesthesiaSubType(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const handleChangesub_asapa = (selectedOption) => {
    setasaps(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const handleChangeMedication = (selectedOption) => {
    setmedication(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const handleChangeSurgeryHistory = (selectedOption) => {
    setsurgeryHistory(selectedOption);
    for (var j = 0; j < surgeryHistoryArray.length; j++) {
      for (var i = 0; i < selectedOption.length; i++) {
        if (surgeryHistoryArray[j].id === selectedOption[i].value) {
          console.log(surgeryHistoryArray[j].surgery_sub_type);
          surgeryHistoryArray[j].surgery_sub_type.forEach((element) => {
            element.value = element.id;
            element.label = element.name;
          });

          setsub_surgeryHistoryArray(surgeryHistoryArray[j].surgery_sub_type);
        }
      }
    }

    /* for(var i=0;i<surgeryHistoryArray.length;i++){
          
            if(surgeryHistoryArray[i].id===selectedOption.value){
                surgeryHistoryArray[i].surgery_sub_type.forEach(element => {
                    element.value=element.id;
                    element.label=element.name
            });
 
           setsub_surgeryHistoryArray(surgeryHistoryArray[i].surgery_sub_type)
            }
            
        }*/
  };

  const handleChangesub_surgeryHistory = (selectedOption) => {
    setsurgerySubHistory(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const handleChangeAnesethesiaHistory = (selectedOption) => {
    setanesethesiaSubHistory(selectedOption);

    console.log(`Option selected:`, selectedOption.value);
  };

  const handleChangesub_anesthesia_history = (selectedOption) => {
    console.log(`Option selected:`, selectedOption);
  };

  const handleChangeAllegries = (selectedOption) => {
    setallegries(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const nextBtnClick = () => {
    console.log(questinNo + 1);
    setquestinNo(questinNo + 1);
  };

  const prevBtnClick = () => {
    setquestinNo(questinNo - 1);
  };

  const subQuestionPress = (id) => {
    for (var i = 0; i < medicalHistory.length; i++) {
      if (medicalHistory[i].id === id) {
        setmedicalSubHistory(medicalHistory[i].medical_history_sub_type);
      }
    }
    setsubQuestionClick(!subQuestionClick);
    setsubQuestionNo(subQuestionNo + 1);
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nameModalVisible = () => {
    closeModal();
    setnameVisble(true);
  };

  const callToCaseSummary = () => {
    //  console.log(asaps)

    let asa_ps_data = [];
    asaps.map((data) => {
      let obj = {
        id: "",
      };

      console.log(data.id);
      obj.id = data.id;
      asa_ps_data.push(obj);
    });

    let surgery_types_data = [];
    surgerySubType.map((data) => {
      let obj = {
        id: "",
      };

      obj.id = data.id;
      surgery_types_data.push(obj);
    });

    let anesthesia_types_data = [];
    anesthesiaSubType.map((data) => {
      let obj = {
        id: "",
      };

      obj.id = data.id;
      anesthesia_types_data.push(obj);
    });

    let medications_data = [];
    medication.map((data) => {
      let obj = {
        id: "",
      };

      obj.id = data.id;
      medications_data.push(obj);
    });

    let allergies_data = [];
    allegries.map((data) => {
      let obj = {
        id: "",
      };

      obj.id = data.id;
      allergies_data.push(obj);
    });

    let medical_histories_data = [];
    medicalHistory.map((data) => {
      let obj = {
        id: "",
      };

      obj.id = data.id;
      medical_histories_data.push(obj);
    });

    let anesthesia_histories_data = [];
    anesethesiaSubHistory.map((data) => {
      let obj = {
        id: "",
      };

      obj.id = data.id;
      anesthesia_histories_data.push(obj);
    });

    let surgery_histories_data = [];
    surgerySubHistory.map((data) => {
      let obj = {
        id: "",
      };

      obj.id = data.id;
      surgery_histories_data.push(obj);
    });

    var token = sessionStorage.getItem("token");
    fetch(
      `http://admin.anesthesiaone.com/api/save-case-summary?token=${token}`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          age: age,
          name: "demo case name",
          gender: gender,
          age_type: ageType,
          height: height,
          height_type: heightType,
          weight: weight,
          weight_type: weightType,
          patient_types_id: patientType,
          npo_status_time: timeOfLastFoodOrDrink,
          npo_status_materials: ingestedMaterial,
          asa_ps_data: asa_ps_data,
          surgery_types_data: surgery_types_data,
          surgical_histories_data: surgery_histories_data,
          anesthesia_types_data: anesthesia_types_data,
          medications_data: medications_data,
          allergies_data: allergies_data,
          medical_histories_data: medical_histories_data,
          anesthesia_histories_data: anesthesia_histories_data,
        }),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res.status === "true") {
          setnameVisble(false);
          console.log(res.data);
          alert("case save successfully");
        }
      });
  };

  const onSiteChanged = (e) => {
    if (e.target.value === "Yes") {
      medicalHistoryArray.push(e.target.name);
    }
  };

  const closeNameModal = () => {
    setnameVisble(false);
  };

  const backPress = () => {
    alert("calling");
  };

  const burgerMenuClick = () => {
    setburgerMenu(!burgerMenu);
  };

  const [questinNo, setquestinNo] = useState(1);
  return (
    <div>
      <BurgerMenuModal modalIsOpen={burgerMenu} />
      <SaveCaseModal
        onClickSave={() => nameModalVisible()}
        modalIsOpen={modalIsOpen}
        onClose={() => closeModal()}
      />
      <SaveCaseNameModal
        closeNameModal={() => closeNameModal()}
        postRequest={() => callToCaseSummary()}
        saveVisible={nameVisble}
        onClose={() => closeModal()}
      />
      <Header onMenuClick={() => burgerMenuClick()} />
      <div className="case-summary-container">
        {/* 
       <div className="case1-container" >
                <div className="case1-header" >case1</div>
                <i class="material-icons add-icon">add</i>
            </div>
            */}
      </div>

      <div className="all-action-container">
        <div className="tab-container">
          <NavLink
            to="/afterLogin"
            exact
            activeClassName="active"
            className="close-case-container"
          >
            <img src={closecase} className="close-case-image" />
          </NavLink>

          <NavLink
            to="/favorite"
            exact
            activeClassName="active"
            className="tab-container-tabs"
          >
            FAVORITES
          </NavLink>

          <NavLink
            to="/casesummary"
            exact
            activeClassName="active"
            className="tab-container-tabs"
          >
            CASE SUMMARY
          </NavLink>

          <NavLink
            className="tab-container-tabs"
            exact
            activeClassName="active"
            to="/allaction"
          >
            ALL ACTION
          </NavLink>
        </div>
        {/*question counter container start */}
        <div className="question-counter-container">
          <i class="material-icons left-icon">play_arrow</i>
          <div className="question-counter-container-header">
            QUESTION {questinNo} TO 9
          </div>
        </div>
        {/*question counter container end */}
        {questinNo == 1 ? (
          <div className="question-container">
            <div>
              <h3>Question</h3>
            </div>
            <div className="age-header-container header-container-bgc">
              AGE?
            </div>
            <div className="age-input-container">
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="ANSWER"
                className="age-input"
              />
              <Select
                onChange={(value) => handleChangeAgeTpe(value)}
                placeholder="Year"
                className="age-type-dropdown select"
                id="age"
                options={optionsforage}
              />
            </div>
            <div className="next-button-container">
              <div onClick={() => nextBtnClick()} className="next-button">
                SKIP
              </div>
              <div onClick={() => nextBtnClick()} className="next-button">
                NEXT
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        {questinNo == 2 ? (
          <div className="question-container">
            <div>
              <h3>Question</h3>
            </div>
            <div className="gender-header-container header-container-bgc">
              GENDER?
            </div>
            <div className="gender-input-container">
              <Select
                onChange={(value) => handleChangeGender(value)}
                placeholder="GENDER"
                className="gender-dropdown select"
                id="age"
                options={optionsforgender}
              />
            </div>
            <div className="next-button-container">
              <div onClick={() => prevBtnClick()} className="next-button">
                PREV
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                SKIP
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                NEXT
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {questinNo == 3 ? (
          <div className="question-container">
            <div>
              <h3>Question</h3>
            </div>
            <div className="patientype-header-container header-container-bgc">
              PATIENT TYPE?
            </div>
            <div className="patientype-input-container">
              <Select
                onChange={(value) => handleChangePatientType(value)}
                placeholder="PATIENT TYPE"
                className="select patientype-dropdown"
                id="patien-type"
                options={patientTypeArray}
              />
            </div>
            <div className="next-button-container">
              <div onClick={() => prevBtnClick()} className="next-button">
                PREV
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                SKIP
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                NEXT
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {questinNo == 4 ? (
          <div className="question-container">
            <div>
              <h3>Question</h3>
            </div>
            <div className="height-header-container header-container-bgc">
              HEIGHT?
            </div>
            <div className="height-input-container">
              <input
                onChange={(e) => setHeight(e.target.value)}
                placeholder="ANSWER"
                className="height-input"
              />
              <Select
                onChange={(value) => handleChangeHeightType(value)}
                placeholder="Height Type"
                className="select height-type-dropdown"
                id="age"
                options={optionsForHeight}
              />
            </div>
            <div className="next-button-container">
              <div onClick={() => prevBtnClick()} className="next-button">
                PREV
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                SKIP
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                NEXT
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {questinNo == 5 ? (
          <div className="question-container">
            <div>
              <h3>Question</h3>
            </div>
            <div className="weight-header-container header-container-bgc">
              WEIGHT?
            </div>
            <div className="weight-input-container">
              <input
                onChange={(e) => setWeight(e.target.value)}
                placeholder="ANSWER"
                className="weight-input"
              />
              <Select
                onChange={(value) => handleChangeWeightType(value)}
                placeholder="Weight Type"
                className="select weight-type-dropdown"
                id="age"
                options={optionsForWeight}
              />
            </div>
            <div className="next-button-container">
              <div onClick={() => prevBtnClick()} className="next-button">
                PREV
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                SKIP
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                NEXT
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {questinNo == 6 ? (
          <div className="question-container">
            <div>
              <h3>Question</h3>
            </div>
            <div className="ASA-PS-header-container header-container-bgc">
              ASA-PS?
            </div>
            <div className="ASA-PS-input-container">
              <Select
                isMulti={true}
                onChange={(value) => handleChangesub_asapa(value)}
                placeholder="ASA-PS"
                className="select ASA-PS-dropdown"
                id="patien-type"
                options={AsapaArray}
              />
            </div>
            <div className="next-button-container">
              <div onClick={() => prevBtnClick()} className="next-button">
                PREV
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                SKIP
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                NEXT
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {questinNo == 7 ? (
          <div className="question-container">
            <div>
              <h3>Question</h3>
            </div>
            <div className="Surgery-type-header-container header-container-bgc">
              SURGERY TYPE?
            </div>
            <div className="Surgery-type-input-container">
              <Select
                isMulti={true}
                onChange={(value) => handleChangeSurgeryType(value)}
                placeholder="SURGERY-TYPE"
                className="select Surgery-type-dropdown"
                id="patien-type"
                options={surgeryTypeArray}
              />
            </div>
            {sub_surgeryArray.length !== 0 ? (
              <div className="Surgery-type-input-container">
                <Select
                  isMulti={true}
                  onChange={(value) => handleChangesub_surgeryType(value)}
                  placeholder="SURGERY-TYPE"
                  className="select Surgery-type-dropdown"
                  id="patien-type"
                  options={sub_surgeryArray}
                />
              </div>
            ) : (
              <></>
            )}

            <div className="next-button-container">
              <div onClick={() => prevBtnClick()} className="next-button">
                PREV
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                SKIP
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                NEXT
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {questinNo == 8 ? (
          <div className="question-container">
            <div>
              <h3>Question</h3>
            </div>
            <div className="ANESTHESIA-type-header-container header-container-bgc">
              ANESTHESIA TYPE?
            </div>
            <div className="ANESTHESIA-type-input-container">
              <Select
                isMulti={true}
                onChange={(value) => handleChangeAnesethesiaType(value)}
                placeholder="ANESTHESIA TYPE"
                className="select ANESTHESIA-type-dropdown"
                id="patien-type"
                options={anesthesia_type_list}
              />
            </div>

            <div className="Surgery-type-input-container">
              {subanesthesia_type.length !== 0 ? (
                <Select
                  isMulti={true}
                  onChange={(value) => handleChangesub_anesthesia_type(value)}
                  placeholder="SURGERY-TYPE"
                  className="select Surgery-type-dropdown"
                  id="patien-type"
                  options={subanesthesia_type}
                />
              ) : (
                <></>
              )}
            </div>

            <div className="next-button-container">
              <div onClick={() => prevBtnClick()} className="next-button">
                PREV
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                SKIP
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                NEXT
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {questinNo == 9 ? (
          <div className="medical-history-question-container">
            <div>
              <h3>Question</h3>
            </div>
            <div className="medical-history-header-container header-container-bgc">
              MEDICAL HISTORY?
            </div>
            {subQuestionClick ? (
              <div className="medical-history-main-container">
                <div>
                  <h3 className="m-3">BY ORGAN SYSTEM:</h3>
                </div>
                {medicalHistory.map((data) => {
                  console.log(data);
                  return (
                    <div>
                       <div className="medical-history-question-header">
                        <div className="mb-4 mt-4 mr-5 text-center">
                          <h4>{data.id}. {data.name}</h4>
                        </div>
                      </div>

                      <div className="medical-history-sub-question-sub-container">
                        {data.medical_history_sub_type.map((data) => {
                          return (
                            
                            <div className="container">
                              <div className="row">
                                <div className="col-6">
                                  <p className="mr-5">{data.name}</p>
                                </div>
                                <div className="col-6 option-box-container">
                                  <p> <input className="ml-3" onChange={(e)=>onSiteChanged(e)} type="radio" value="Yes" name={data.name} /> Yes
                                  <input className="ml-3" onChange={(e)=>onSiteChanged(e)} type="radio" value="No" name={data.name} /> No
                                </p>
                              
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      {/* <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{data.name}</td>
                            <td>@mdo</td>
                          </tr>
                        </tbody>
                      </table> */}
                    </div>
                  );
                })}
              </div>
            ) : (
              <></>
            )}

            <div className="next-button-container mb-5 mt-5">
              <div onClick={() => prevBtnClick()} className="next-button">
                PREV
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                SKIP
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                NEXT
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {questinNo == 10 ? (
          <div className="question-container">
            <div>
              <h3>Question</h3>
            </div>
            <div className="medications-header-container header-container-bgc">
              MEDICATIONS?
            </div>
            <div className="medications-input-container">
              <Select
                isMulti={true}
                onChange={(value) => handleChangeMedication(value)}
                placeholder="Medication"
                className="select medications-dropdown"
                id="patien-type"
                options={medicationsArray}
              />
            </div>

            <div className="next-button-container">
              <div onClick={() => prevBtnClick()} className="next-button">
                PREV
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                SKIP
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                NEXT
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {questinNo == 11 ? (
          <div className="question-container">
            <div>
              <h3>Question</h3>
            </div>
            <div className="Surgery-type-header-container header-container-bgc">
              SURGERY HISTORY?
            </div>
            <div className="Surgery-type-input-container">
              <Select
                isMulti={true}
                onChange={(value) => handleChangeSurgeryHistory(value)}
                placeholder="SURGERY-TYPE"
                className="select Surgery-type-dropdown"
                id="patien-type"
                options={surgeryHistoryArray}
              />
            </div>
            <div className="Surgery-type-input-container">
              {sub_surgeryHistoryArray.length !== 0 ? (
                <Select
                  isMulti={true}
                  onChange={(value) => handleChangesub_surgeryHistory(value)}
                  placeholder="SURGERY-TYPE"
                  className="select Surgery-type-dropdown"
                  id="patien-type"
                  options={sub_surgeryHistoryArray}
                />
              ) : (
                <></>
              )}
            </div>

            <div className="next-button-container">
              <div onClick={() => prevBtnClick()} className="next-button">
                PREV
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                SKIP
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                NEXT
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {questinNo == 12 ? (
          <div className="question-container">
            <div>
              <h3>Question</h3>
            </div>
            <div className="ANESTHESIA-type-header-container header-container-bgc">
              ANESTHESIA HISTORY?
            </div>
            <div className="ANESTHESIA-type-input-container">
              <Select
                isMulti={true}
                onChange={(value) => handleChangeAnesethesiaHistory(value)}
                placeholder="ANESTHESIA TYPE"
                className="select ANESTHESIA-type-dropdown"
                id="patien-type"
                options={anesethesiaHistory}
              />
            </div>

            <div className="next-button-container">
              <div onClick={() => prevBtnClick()} className="next-button">
                PREV
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                SKIP
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                NEXT
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {questinNo == 13 ? (
          <div className="question-container">
            <div>
              <h3>Question</h3>
            </div>
            <div className="ANESTHESIA-type-header-container header-container-bgc">
              ALLERGIES?
            </div>
            <div className="ANESTHESIA-type-input-container">
              <Select
                isMulti={true}
                onChange={(value) => handleChangeAllegries(value)}
                placeholder="ANESTHESIA TYPE"
                className="select ANESTHESIA-type-dropdown"
                id="patien-type"
                options={AllegriesArray}
              />
            </div>

            <div className="next-button-container">
              <div onClick={() => prevBtnClick()} className="next-button">
                PREV
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                SKIP
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                NEXT
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {questinNo == 14 ? (
          <div className="question-container">
            <div>
              <h3>Question</h3>
            </div>
            <div className="age-header-container header-container-bgc">
              NPO-STATUS?
            </div>
            <div className="age-input-container">
              <input
                onChange={(e) => settimeOfLastFoodOrDrink(e.target.value)}
                placeholder="TIME OF LAST FOOD OR DRINK"
                className="age-input q14"
              />
            </div>
            <div className="age-input-container">
              <input
                onChange={(e) => setingestedMaterial(e.target.value)}
                placeholder="INGESTED MATERIAL"
                className="age-input q14"
              />
            </div>

            <div className="next-button-container">
              <div onClick={() => prevBtnClick()} className="next-button">
                PREV
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                SKIP
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                NEXT
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {questinNo == 15 ? (
          <div className="result-container">
            <div className="answer-container">
              <div>1.AGE?</div>
              <div>{age}</div>
            </div>
            <div className="answer-container">
              <div>2.GENDER??</div>
              <div>{gender}</div>
            </div>
            <div className="answer-container">
              <div>3.PATIENT TYPE?</div>
              <div>{patientType}</div>
            </div>
            <div className="answer-container">
              <div>4.HEIGHT?</div>
              <div>{height}</div>
            </div>
            <div className="answer-container">
              <div>5. WEIGHT?</div>
              <div>{weight}</div>
            </div>
            <div className="answer-container">
              <div>5. ASA-PS?</div>
              <div>
                {asaps.map((data) => {
                  return <div>{data.label},</div>;
                })}
              </div>
            </div>
            <div className="answer-container">
              <div>6. SURGERY TYPE?</div>
              <div>
              {
                                surgerySubType.length==0?
                                surgeryType.map((data)=>{
                                    return(
                                        <div>
                                            {data.label}
                                        </div>
                                    )
                                }):<></>
                            }
                        {surgerySubType.map((data)=>{
                            return(
                                <div>
                                    {data.label}
                                </div>
                            )
                        
                        })}
              </div>
            </div>
            <div className="answer-container">
              <div>7. ANESTHESIA TYPE?</div>
              <div>
                {anesthesiaSubType.map((data) => {
                  return <div>{data.label}</div>;
                })}
              </div>
            </div>
            <div className="answer-container">
              <div>9. NPO STATUS?</div>
              <div>{timeOfLastFoodOrDrink}</div>
            </div>

            <div className="answer-container">
              <div>10. MEDICATIONS?</div>
              <div>
                {medication.map((data) => {
                  return <div>{data.label}</div>;
                })}
              </div>
            </div>

            <div className="answer-container">
              <div>11. ALLERGIES?</div>
              <div>
                {allegries.map((data) => {
                  return <div>{data.label}</div>;
                })}
              </div>
            </div>

            <div className="answer-container">
              <div>12. MEDICAL HISTORY?</div>
              <div>
                {medicalHistoryArray.map((data) => {
                  return <div>{data},</div>;
                })}
              </div>
            </div>

            <div className="answer-container">
              <div>13. SURGICAL HISTORY? ?</div>
              <div>
                {surgerySubHistory.map((data) => {
                  return <div>{data.label}</div>;
                })}
              </div>
            </div>

            <div className="answer-container">
              <div>14. ANESTHESIA HISTORY?</div>
              <div>
                {anesethesiaSubHistory.map((data) => {
                  return <div>{data.label}</div>;
                })}
              </div>
            </div>

            <div className="next-button-container">
              <div onClick={() => prevBtnClick()} className="next-button">
                PREV
              </div>

              <div onClick={() => openModal()} className="next-button">
                SAVE
              </div>

              <div onClick={() => nextBtnClick()} className="next-button">
                NEXT
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {questinNo === 16 ? (
          <div className="question-container">
            <div className="action-summary">
              <div className="preop-container">
                <div>PREOP</div>
                <div className="circle"></div>
              </div>
              <div className="preop-container">
                <div>INTRAOP</div>
                <div className="gray-circle"></div>
              </div>

              <div className="preop-container">
                <div>POSTOP</div>
                <div className="gray-circle"></div>
              </div>
            </div>
            <div className="preop-container-subcontainer">
              <div>1.CASE SUMMARY</div>
              <div>2.PREOPERATIVE TESTING</div>
              <div>3.RISK EVALUATION</div>
              <div>4.PHYSICAL EXAM</div>
              <div>5.PREMEDICATION</div>
            </div>
            <div className="next-button-container">
              <div className="next-button">NEXT</div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CaseSummary;
