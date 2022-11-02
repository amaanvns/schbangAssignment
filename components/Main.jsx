import React from "react";
import styles from "../styles/Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.services}>
        <div className={styles.redBox}></div>
        <div style={{ fontSize: "75px", color: "#2e266f" }}>
          Our <br /> Services
        </div>
        <div
          style={{
            fontSize: "23px",
            width: "65%",
            paddingLeft: "150px",
            color: "#707070",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. voluptate,
          doloremque magnam quasi repellat ea doloribus tempora maiores, a quo
          hic similique architecto ad sequi animi eius laboriosam. Lorem ipsum
          dol
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoLeft}>
          <div className={styles.infoTop}>
            <div className={styles.infoLogo1}>
              <img src="/meeting.png" alt="" />
            </div>
            <div className={styles.info1}>
              <h1 style={{ color: "#2e266f" }}>
                advance table <br />{" "}
                <div
                  style={{
                    textAlign: "end",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div> booking</div>
                  <div
                    style={{
                      width: "100px",
                      height: "3px",
                      backgroundColor: "red",
                      marginLeft: "20px",
                    }}
                  ></div>
                </div>
              </h1>
              <p style={{ fontSize: "22px", color: "#707070" }}>
                Lorem ipsum dolor sit amet elit. Quae deserunt labore
                consectetur, adipisicing
              </p>
            </div>
            <img
              src="/Group 53.png"
              alt=""
              style={{ position: "absolute", left: "32%" }}
            />
          </div>
          <div className={styles.infoBottom}>
            <div className={styles.info2}>
              <h1 style={{ color: "#2e266f" }}>
                Food for Free <br />
                <div
                  style={{
                    textAlign: "end",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: "#2e266f",
                  }}
                >
                  <div
                    style={{
                      width: "100px",
                      height: "3px",
                      backgroundColor: "red",
                    }}
                  ></div>
                  <div> 24/7</div>
                </div>
              </h1>
              <p style={{ fontSize: "22px", color: "#707070" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                deserunt labore
              </p>
            </div>
            <img
              src="/Group 55.png"
              alt=""
              style={{ position: "absolute", right: "35%" }}
            />

            <div className={styles.infoLogo2}>
              <img src="/dish.png" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.infoRight}>
          <div>
            <img src="/scooter.png" alt="" />
          </div>
          <div style={{ textAlign: "center", width: "60%" }}>
            <h1 style={{ color: "#2e266f" }}>
              free home delivery at your door steps
            </h1>
            <p style={{ fontSize: "20px", color: "#707070" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius?
              Lorem, ipsum dolor sit
            </p>
            <div
              style={{
                width: "280px",
                height: "3px",
                backgroundColor: "red",
                marginLeft: "20px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
