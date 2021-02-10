import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, createCard } from "../../utils/api/index";
import BreadCrumbNav from "../Common/BreadCrumbNav";
function AddCard() {
    const { deckId, cardId } = useParams();
    const [deck, setDeck] = useState("");
    const [front, setFront] = useState("");
    const [back, setBack] = useState("");

    const history = useHistory();

    const handleAddCard = (e) => {
        e.preventDefault();
        const newCard = {
            "front": front,
            "back": back,
            "deckId": deckId,
            "id": cardId
        };
        createCard(deckId, newCard);
        history.push(`/decks/${deckId}`);
    }

    useEffect(() => {
        const abortController = new AbortController();
        const fetchDeck = async () => setDeck(await readDeck(deckId, abortController.signal));
        fetchDeck();
        return () => abortController.abort();
    }, [deckId]);

    const handleFrontChange = (e) => setFront(e.target.value);
    const handleBackChange = (e) => setBack(e.target.value);
    return (
        <>
            <BreadCrumbNav link={`/decks/${deck.id}`} linkName={deck.name} pageName={"Add Card"} />
            <div className="row d-flex">
                <h4 className="mr-1">{deck.name}:</h4><h4>Add Card</h4>
            </div>
            <form className="row" onSubmit={handleAddCard}>
                <div className="form-group w-100">
                    <label className="font-weight-bold" htmlFor="deck-description">Front</label>
                    <textarea type="text" required className="form-control" onChange={handleFrontChange} placeholder={"Front side of card"} />
                </div>
                <div className="form-group w-100">
                    <label className="font-weight-bold" htmlFor="deck-description">Back</label>
                    <textarea type="text" required className="form-control" onChange={handleBackChange} placeholder={"Back side of card"} />
                </div>
                <Link to="/"><button className="btn btn-secondary mr-2">Done</button></Link>
                <button className="btn btn-primary" type="submit">Save</button>
            </form>
        </>
    );
}

export default AddCard;