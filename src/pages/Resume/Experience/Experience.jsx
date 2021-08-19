import React from 'react';
import styled from 'styled-components';

const Exp = styled.div`
    padding: 1em 1em 2em;
    font-family: "Raleway",Helvetica,sans-serif;
    letter-spacing: .25em;
    line-height: 1.65;
`;

const ExpTit = styled.h3`
    text-align: center;
    margin-bottom: 2em;
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: 900;
`;

const ExpBody = styled.div`
    margin-bottom: 1.8em;
`;

const Headh4 = styled.h4`
    margin-bottom: .2em;
    text-transform: none;
    letter-spacing: .16em;
    font-size: 1em;
    font-weight: 600;
`;

const Time = styled.div`
    font-size: .9em;
    margin-bottom: .9em;
`;

const Linksch = styled.a`
    transition: color .2s ease,border-bottom-color .2s ease;
    border-bottom: 1px dotted hsla(0,0%,62.7%,.65);
    color: inherit;
    text-decoration: none;
`;

const Points = styled.ul`
    list-style: disc;
    margin: 0 0 2em;
    padding-left: 1em;
`;

const List = styled.li`
    margin: 0;
    padding: 0;
    font-size: .9em;
    letter-spacing: .1em;
    font-weight: 550;
    color: #4b4b4b;
`;

const Experience = () => (
    <Exp>
        <ExpTit>Experience</ExpTit>
        <ExpBody>
            <Headh4>
                Personal Website (Portfolio) - Owner {'&'} Developer
            </Headh4>
            <Time>
                <Linksch href = 'https://github.com/conanzahn/Haonan-Website.git/'>
                    Haonan Zhang's Website
                </Linksch>, AUGUST 2021
            </Time>
            <Points>
                <List>Skills: Git, GitHub, React, Javascript, styled-components, CSS, Sass, npm, Bootstrap.</List>
                <List>Use create react app build my portfolio website.</List>
                <List>Design website interface.</List>
            </Points>
        </ExpBody>

        <ExpBody>
            <Headh4>
                Eatery Voucher Website - Scrum Master {'&'} Team Leader {'&'} Front-end Developer
            </Headh4>
            <Time>
                <Linksch href = 'https://github.com/conanzahn/ValueEatsWebsite9900.git'>
                    Value Eats Website
                </Linksch>, MAY 2021 - AUGUST 2021
            </Time>
            <Points>
                <List>Skills: Jira, Git, GitHub, React, Javascript, styled-components, CSS, Sass, npm, Axios, Bootstrap, Material-UI.</List>
                <List>Design and Implement a website software that provides restaurant discount vouchers. Includes two different user types
                for specific demands.</List>
                <List>Main features: Allows eatery users to create and verify vouchers; Allow diner users to search, navigate, and book
                vouchers. Also provides recommendation and subscription features. All users can create and manage their accounts</List>
                <List>Design project proposal, construct all possible user stories and design a road map of the project.</List>
                <List>I use Jira to manage team co-operate, assign tasks to team members. I have created six sprints for this project, each
                sprint contains some features that support user stories.</List>
                <List>Use GitHub to manage project code.</List>
                <List>Use Git command to manage version control.</List>
                <List>Responsible for front-end development, use React app to build front-end framework and npm as the package manager.</List>
                <List>Use javascript, styled-components, CSS, Sass.</List>
                <List>Use Axios to connect front-end and back-end.</List>
                <List>Use React-Bootstrap and Material-UI as the third part of functionality licensing.</List>
                <List>Design website interface.</List>
            </Points>
        </ExpBody>

        <ExpBody>
            <Headh4>
                Velocity Estimation and Lane Detection (Computer Vision)
            </Headh4>
            <Time>
                <Linksch href = 'https://github.com/conanzahn/Velocity-Estimation-and-Lane-Detection.git/'>
                    Python Imlementation Repo
                </Linksch>, April 2021
            </Time>
            <Points>
                <List>Skills: Python, OpenCV, Scikit-Learn, Matplotlib, SciPy, Numpy.</List>
                <List>Responsibility: Driving Lane Detection.</List>
                <List>Method of Driving Lane Detection divided into three parts: Dataset Preprocessing, Detection, Optimization.</List>
                <List>Extract Region of interest(ROI) from the whole training data set.</List>
                <List>Apply the Gaussian smoothing algorithm to remove noises.</List>
                <List>Combine RGB and HSV color spaces with specific thresholding.</List>
                <List>Use the canny edge detector to find the boundary position of the driving lane.</List>
                <List>Apply the Hough Transform as a feature extraction technique to detect whether a line exists in the edge image. </List>
                <List> Averaging and extrapolating are chosen to optimize the results, the reason is that each driving 
                    lane lines in the image have a different slope, using this can grouping and dividing lines.</List>
            </Points>
        </ExpBody>

        <ExpBody>
            <Headh4>
                Vehicle Detection (Computer Vision)
            </Headh4>
            <Time>
                <Linksch href = 'https://github.com/conanzahn/Vehicle-Detection-Computer-Vision-.git/'>
                    Python Imlementation Repo
                </Linksch>, March 2021
            </Time>
            <Points>
                <List>Skills: Python, OpenCV, Scikit-Learn, Matplotlib, SciPy, Numpy.</List>
                <List>Preprocessing: Extract vehicle image regions(ROI) from the whole 
                    training data set, using the 'bbox' message from the annotation file.</List>
                <List>Feature extraction: I select the histogram of oriented gradients(HOG) 
                    method to extract features.</List>
                <List>Classifier: Use support vector machine (SVM) model.</List>
                <List>Object Detection: Use sliding window technology search vehicles in image.</List>
            </Points>
        </ExpBody>

        <ExpBody>
            <Headh4>
                Classification and rating prediction for user reviews (deep learning model) - Developer
            </Headh4>
            <Time>
                <Linksch href = ''>
                    Deep Learning NLP Model
                </Linksch>, SEPTEMBER 2020 - NOVEMBER 2020
            </Time>
            <Points>
                <List>Write a Pytorch program to analyze review scores and industry classification.</List>
                <List>Use NLP methods such as regular expression, stem extraction, and stop words to preprocess the data.</List>
                <List>Construct a two-way LSTM neural network and the corresponding loss function.</List>
                <List>Train the model, analyze the results and adjust the hyperparameters of the training model, and repeatedly debug to get
                the best performance parameters.</List>
                <List>Use the model to predict user reviews, and finally achieved 90% accuracy in the test.</List>
            </Points>
        </ExpBody>

        <ExpBody>
            <Headh4>
                Rossmann sales forecast (machine learning - Kaggle competition project) - Developer
            </Headh4>
            <Time>
                <Linksch href = 'https://github.com/conanzahn/Rossmann-sales-forecast-Machine-Learning-.git'>
                    Rossmann sales forecast
                </Linksch>, JUNE 2020 - JULY 2020
            </Time>
            <Points>
                <List>Preprocess the data, clean the data.</List>
                <List>Build Ridge model, Lasso model, decision tree model, random forest model, integrated model to analyze and predict the
                database.</List>
            </Points>
        </ExpBody>

        <ExpBody>
            <Headh4>
                Sentiment analysis for Twitter user comments - Developer
            </Headh4>
            <Time>
                <Linksch href = ''>
                    Rossmann sales forecast
                </Linksch>, JUNE 2020 - JULY 2020
            </Time>
            <Points>
                <List>Perform text preprocessing on the Twitter comment data set.</List>
                <List>Build decision tree models, Bernoulli models, and polynomial models for the data set, and perform model training on the
            data set.</List>
            </Points>
        </ExpBody>
    </Exp>
)
export default Experience;