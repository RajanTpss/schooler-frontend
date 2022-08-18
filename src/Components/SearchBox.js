import React, { useCallback, useState } from 'react'

function SearchBox(OptionData,submitData) {
    // console.log("Options:",OptionData.OptionData);
    const [searchData, setSearchData] = useState({ option: "" });
    const [searchBox, setSearchBox] = useState({ keyword: "" })
    const formData = (key, e) => {
        setSearchData({ ...searchData, [key]: e.target.value })
    }
    const onchangeData = (key, e) => {
        e.preventDefault()
        saveValues({ ...searchBox, [key]: e.target.value })
    }

    const saveValues = useCallback(debounce((val) => {
        setSearchBox(val)
    }, 1000), []);
    console.log("search:",searchBox);
    function debounce(fn, delay) {
        let timer;
        return function () {
            let context = {},
                args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(context, args);
            }, delay);
        };
    }
  
    return (
        <>
            <form class="d-flex" onSubmit={(e) => submitData(e)}>
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => onchangeData("keyword", e)} />
                <select class="form-select me-2" aria-label="Default select example" onChange={(e) => formData("option", e)}>
                    <option selected>Open this select menu</option>
                    {
                        OptionData.OptionData.length >= 1
                            ?
                            OptionData.OptionData.map((item) => {
                                return (
                                    <option value={item}>{item}</option>
                                )
                            })
                            : null
                    }
                </select>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </>
    )
}

export default SearchBox