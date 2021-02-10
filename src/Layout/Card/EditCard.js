import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, readCard, updateCard } from "../../utils/api/index";
import BreadCrumbNav from "../Common/BreadCrumbNav";

function EditCard() {
    const { deckId, cardId } = useParams();
    const [card, setCard] = useState([])
    const [deck, setDeck] = useState([]);
    const [changed, setChanged] = useState(false);

    const history = useHistory();

    const handleEditCard = (e) => {
        e.preventDefault();
        if (changed) {
            const updatedCard = {
                "front": front,
                "back": back,
                "deckId": deckId,
                "id": cardId
            };
            updateCard(updatedCard);
            setChanged(bool => bool = false);
        }
        history.push(`/decks/${deckId}`);
    }

    useEffect(() => {
        const fetchDeck = async () => setDeck(await readDeck(deckId));
        fetchDeck();
        const fetchCard = async () => setCard(await readCard(cardId));
        fetchCard();
    }, [cardId, deckId]);

    const [front, setFront] = useState(card.front);
    const [back, setBack] = useState(card.back);

    const handleFrontChange = (e) => { setFront(e.target.value); setChanged(bool => bool = true) };
    const handleBackChange = (e) => { setBack(e.target.value); setChanged(bool => bool = true) };
    return (
        <>
            <BreadCrumbNav link={`/decks/${deck.id}`} linkName={deck.name} pageName={"Edit Card"} />
            <div className="row">
                <h4>Edit Card</h4>
            </div>
            <form className="row" onSubmit={handleEditCard}>
                <div className="form-group w-100">
                    <label className="font-weight-bold" htmlFor="deck-description">Front</label>
                    <textarea type="text" required className="form-control" onChange={handleFrontChange} defaultValue={card.front} />
                </div>
                <div className="form-group w-100">
                    <label className="font-weight-bold" htmlFor="deck-description">Back</label>
                    <textarea required className="form-control" onChange={handleBackChange} defaultValue={card.back} />
                </div>
                <Link to={`/decks/${deck.id}`}> <button className="btn btn-secondary mr-2">Cancel</button></Link>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </>
    );
}


export default EditCard;