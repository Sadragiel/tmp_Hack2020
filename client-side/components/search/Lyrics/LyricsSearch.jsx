import React from 'react';

import { useFormik } from 'formik';

export default ({ performSearch }) => {
    const formik = useFormik({
        initialValues: {
            lyrics: '',
        },
        onSubmit: values => performSearch(values.lyrics),
    });

    return (
        <form 
            className="lyrics-search"
            onSubmit={formik.handleSubmit}>
            <h2 className="lyrics-search__title"> Lyrics searching  </h2>
            <input 
                className="lyrics-search__input"
                id="lyrics"
                name="lyrics"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lyrics}
            />
            <button className="lyrics-search__button" type="submit"> Search </button>
        </form>
    )
} 