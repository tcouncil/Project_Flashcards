import React from "react";
import NextButton from "../Buttons/NextButton";
import ResetButton from "../Buttons/ResetButton";

function StudyCard({ cardText, onBack, onEnd, cardNum, cardTotal, next, flip, reset }) {
    return (
        <>
            <div className="row d-flex justify-content-center mt-1 w-100">
                <div className="card m-1 p-5">
                    <div className="card-body row text-center">
                        <p className="card-text col-12" >{cardText}</p>
                    </div>
                </div>
                <div className="col-12">
                    <h4 className="card-text d-flex justify-content-end">{`Card ${cardNum} of ${cardTotal}`}</h4>
                </div>
                <div className="d-flex justify-content-center mt-1 btn btn-secondary mb-3" onClick={flip}>
                    Flip
                </div>
                {onBack ? <NextButton next={next} /> : null}{onEnd ? <ResetButton reset={reset} /> : null}
            </div>
        </>
    );
}

export default StudyCard;