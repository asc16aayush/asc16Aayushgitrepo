import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form } from "react-bootstrap"

import { addSession } from '../../../../services/sessions';
import { Level } from '../../../../models/ISession';
interface Props {
    id: number
}

interface SessionFormType {
    sequenceId: number;
    name: string;
    speaker: string;
    duration: number;
    level: Level;
    abstract: string;
}

// React Hook Form uncontrolled components
const AddSession = ( { id } : Props) => {
    const { register, formState: { errors, isValid }, getValues, handleSubmit } = useForm<SessionFormType>({
        mode: 'all' // all events like change, blur, submit of form will trigger validatons
    });

    const navigate = useNavigate();

    const onSubmit = async (values : SessionFormType) => {

        const session = {
            ...values,
            sequenceId: +values.sequenceId,
            duration: +values.duration,
            upvoteCount: 0,
            workshopId: id
        };

        console.log( session );

        // POST the new session information to create a new session
        try {
            const newSession = await addSession( session );
            // alert('New session has been added');
            navigate( '../' ); // or navigate('/workshops/${id}')
        } catch(error) {
            alert((error as Error).message);
        }
    }

    const checkDurationAgainstLevel = () => {
        const duration = getValues('duration');
        const level = getValues('level');

        if( level === 'Basic' && duration < 1 ) {
            return false;
        }

        if( level === 'Intermediate' && duration < 2 ) {
            return false;
        }

        if( level === 'Advanced' && duration < 3 ) {
            return false;
        }

        return true;
    }

    return (
        <div>
            <h1 className="d-flex justify-content-between align-items-center">
                Add a Session
                <Link to=".." className="btn btn-primary">List of sessions</Link>
            </h1>

            <hr />

            {/* handleSubmit(onSubmit) returns a function */}
            {/* handleSubmit ensures that onSubmit is called only when the form is valid */}
            {/* the broswer form submission is prevented */}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-4" controlId="sequenceId">
                    <Form.Label>Sequence ID</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="The Sequence ID of the session (eg. 1, 2, 3...)"
                        {...register('sequenceId', { required: true, pattern: /^\d+$/ })}
                    />
                    {
                        errors.sequenceId && (
                            <>
                                {
                                    errors.sequenceId.type === 'required' && <div>This field is required</div>
                                }
                                {
                                    errors.sequenceId.type === 'pattern' && <div>This should be a positive number</div>
                                }
                            </>
                        )
                    }
                </Form.Group>
                <Form.Group className="mb-4" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name of the session, Eg. Introduction to Programming"
                        {...register('name', { required: true, pattern: /^[A-Za-z0-9][A-Za-z0-9 ]+$/ })}
                    />
                </Form.Group>
                <Form.Group className="mb-4" controlId="speaker">
                    <Form.Label>Speaker</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name of the speaker(s). Eg. John Doe, Jane Doe"
                        {...register('speaker', { required: true, pattern: /^[A-Za-z][A-Za-z ]+$/ })}
                    />
                </Form.Group>
                <Form.Group className="mb-4" controlId="duration">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="The duration of the session in hours (eg. 2.5)"
                        {...register('duration', { required: true, pattern: /^\d+(.\d+)?$/ })}
                    />
                </Form.Group>
                <Form.Group className="mb-4" controlId="level">
                    <Form.Label>Level</Form.Label>
                    <Form.Select
                        aria-label="Level"
                        {...register('level', { required: true, validate: checkDurationAgainstLevel })}
                    >
                        <option disabled>-- Select the level --</option>
                        <option value="Basic">Basic</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </Form.Select>
                </Form.Group>
                {
                    errors.level && (
                        <>
                            {
                                errors.level.type === 'required' && <div>This field is required</div>
                            }
                            {
                                errors.level.type === 'validate' && <div>Minimum duration condition for this level is not met.</div>
                            }
                        </>
                    )
                }
                <Form.Group className="mb-4" controlId="abstract">
                    <Form.Label>Abstract</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        {...register('abstract', { required: true, minLength: 20 })}
                    />
                </Form.Group>

                <Button type="submit" disabled={!isValid}>Add a session</Button>
            </Form>
        </div>
    );
}

export default AddSession;