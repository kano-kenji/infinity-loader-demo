import React, {useEffect, useState} from 'react';
import api from './api/api';
import axios from "axios";
import './App.css';

function App() {
    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    // start a function (addEventListener) from useEffect hook after rendering
    // https://ru.reactjs.org/docs/hooks-reference.html#useeffect
    useEffect(() => {
        ['scroll', 'touchmove'].forEach(function(e) {
            window.addEventListener(e, handleScroll);
            return () => window.removeEventListener(e, handleScroll);
        });
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        getData();
    }, [isFetching]);

    const getDocHeight = () => {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    }

    function handleScroll() {
        //innerHeight - Height of window screen in pixels
        const innerHeight = window.innerHeight
        // scrollTop - set of px scrolling from top to bottom a DOM element
        const scrollTop = window.scrollTop;

        //offsetHeight - height of a DOM element
        const offsetHeight = document.documentElement.scrollHeight

        //not near bottom
        if (Math.round(innerHeight + scrollTop) > (offsetHeight - 100)) return;

        setIsFetching(true);
    }

    const getData = () => {
        setIsFetching(true);
        api.get('images/search')
            .then(function (response) {
                setData([...data, response.data[0]]);
                setIsFetching(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //initial data fill out. Start with 3 images
    if (data.length === 0) {
        let requests = [];
        for (let i = 0; i < 3; i++) {
            requests = [...requests, api.get('images/search')];
        }
        axios.all(requests).then(responses => {
            let responsesData = [];
            responses.map(response =>
                responsesData = [...responsesData, response.data[0]]
            )
            setData(responsesData);
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
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
