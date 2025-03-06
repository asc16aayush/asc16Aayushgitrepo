import ISession from "../../../../../models/ISession";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";

import './Item.scss';

type VoteFunction = (
    sessionId: number,
    voteType: 'upvote' | 'downvote'
) => void;

interface Props {
    session: ISession,
    vote: VoteFunction
}

const Item = ( { session, vote } : Props ) => {
    const { id, name, speaker, level, abstract, upvoteCount } = session;

    return (
        <div>
            <h3>{name}</h3>
            <div>by {speaker}</div>
            <div className="badge bg-primary">{level}</div>
            <p>{abstract}</p>
            <div>
                <FontAwesomeIcon icon={faThumbsUp} onClick={() => vote(id, 'upvote')} className="fa-2x" />
                <span style={{ fontSize: '2em', margin: '0 1em' }}>{upvoteCount}</span>
                <FontAwesomeIcon icon={faThumbsDown} onClick={() => vote(id, 'downvote')} className="fa-2x" />
            </div>
        </div>
    );
}

export default Item;