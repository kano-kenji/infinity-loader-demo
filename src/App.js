import React, {useEffect, useState} from 'react';
import api from './api/api';
import axios from "axios";
import './App.css';

function App() {
    const [data, setData] = useState([]);
    const [start, setStart] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    // start a function (addEventListener) from useEffect hook after rendering
    // https://ru.reactjs.org/docs/hooks-reference.html#useeffect
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isLoading) return;
        getData();
    }, [isLoading]);

    function handleScroll() {
        //window.innerHeight - Height of window screen in pixels
        //document.documentElement.scrollTop - set of px scrolling from top to bottom a DOM element
        //document.documentElement.offsetHeight - height of a DOM element
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setIsLoading(true);
    }

    const getData = () => {
        setIsLoading(true);
        api.get('images/search')
            .then(function (response) {
                setData([...data, response.data[0]]);
                setIsLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //initial data fill out. Start with 3 images
    if (start) {
        let requests = [];
        for (let i = 0; i < 3; i++) {
            requests = [...requests, api.get('images/search')];
        }
        axios.all(requests).then(responses => {
            let responsesData = [];
            responses.map(response => {
                responsesData = [...responsesData, response.data[0]];
            })
            setData(responsesData);
            setStart(false);
        }).catch(errors => {
            console.log(errors);
        })
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col">
                    {
                        data.map((obj, index) =>
                            <div key={index} className="card">
                                <div className="card-body">
                                    <img
                                        alt={obj.id}
                                        className="card-img-top"
                                        src={obj.url}
                                    />
                                </div>
                                {isLoading &&
                                    <span  className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
