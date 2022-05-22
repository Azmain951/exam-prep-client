import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const AddQuestions = () => {
    const [user] = useAuthState(auth);
    const handleQuestionAdd = e => {
        e.preventDefault();
        const question = e.target.question.value;
        const category = e.target.category.value;
        const bcsNo = e.target.bcsNo.value;
        const option1 = e.target.option1.value;
        const option1v = e.target.option1v.value;
        const option2 = e.target.option2.value;
        const option2v = e.target.option2v.value;
        const option3 = e.target.option3.value;
        const option3v = e.target.option3v.value;
        const option4 = e.target.option4.value;
        const option4v = e.target.option4v.value;

        const fullQuestion = {
            questionText: question,
            category,
            bcsNo,
            answerOptions: [
                {
                    answerText: option1,
                    isCorrect: option1v
                },
                {
                    answerText: option2,
                    isCorrect: option2v
                },
                {
                    answerText: option3,
                    isCorrect: option3v
                },
                {
                    answerText: option4,
                    isCorrect: option4v
                }
            ]
        }

        console.log(fullQuestion);

        fetch(`https://desolate-wildwood-64014.herokuapp.com/questions?email=${user.email}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(fullQuestion)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast.success('Question added successfully');
                e.target.reset();
            });
    }

    return (
        <div className='w-75 mx-auto shadow m-5 p-5'>
            <h2 className='text-center'>Add Questions</h2>
            <Form onSubmit={handleQuestionAdd}>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={7} controlId="formGridEmail">
                        <Form.Label>Question</Form.Label>
                        <Form.Control type="text" name="question" placeholder="Question" />
                    </Form.Group>
                    <Form.Group as={Col} xs={3} controlId="formGridState">
                        <Form.Label>Category</Form.Label>
                        <Form.Select name="category" defaultValue="Computer Science">
                            <option>BCS Questions</option>
                            <option>General Knowledge</option>
                            <option>Computer Science</option>
                            <option>General Math</option>
                            <option>International Affairs</option>
                            <option>English Grammer</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} xs={2} controlId="formGridEmail">
                        <Form.Label>No</Form.Label>
                        <Form.Select name="bcsNo" defaultValue="">
                            <option>43</option>
                            <option>42</option>
                            <option>41</option>
                            <option>40</option>
                            <option>39</option>
                            <option>38</option>
                            <option>37</option>
                            <option>36</option>
                            <option>35</option>
                            <option>34</option>
                            <option>33</option>
                            <option>32</option>
                            <option>31</option>
                            <option>30</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={4} controlId="formGridCity">
                        <Form.Label>Option 1</Form.Label>
                        <Form.Control name="option1" />
                    </Form.Group>
                    <Form.Group as={Col} xs={2} controlId="formGridZip">
                        <Form.Label>Option 1</Form.Label>
                        <Form.Select name="option1v" type="" defaultValue="false">
                            <option>true</option>
                            <option>false</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} xs={4} controlId="formGridCity">
                        <Form.Label>Option 2</Form.Label>
                        <Form.Control name="option2" />
                    </Form.Group>
                    <Form.Group as={Col} xs={2} controlId="formGridZip">
                        <Form.Label>Option 2</Form.Label>
                        <Form.Select name="option2v" defaultValue="false">
                            <option>true</option>
                            <option>false</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={4} controlId="formGridCity">
                        <Form.Label>Option 3</Form.Label>
                        <Form.Control name="option3" />
                    </Form.Group>
                    <Form.Group as={Col} xs={2} controlId="formGridZip">
                        <Form.Label>Option 3</Form.Label>
                        <Form.Select name="option3v" defaultValue="false">
                            <option>true</option>
                            <option>false</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} xs={4} controlId="formGridCity">
                        <Form.Label>Option 4</Form.Label>
                        <Form.Control name="option4" />
                    </Form.Group>
                    <Form.Group as={Col} xs={2} controlId="formGridZip">
                        <Form.Label>Option 4</Form.Label>
                        <Form.Select name="option4v" defaultValue="false">
                            <option>true</option>
                            <option>false</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddQuestions;