import React from 'react';

import { useFormik } from 'formik';

export default ({ 
    attemptQuantity,
    setAttemptQuantity,
    callback
 }) => {
    const handleSubmit = values => {
        setAttemptQuantity(values.attemptQuantity);
        callback(values.search_type);
    }

    const formik = useFormik({
        initialValues: {
            attemptQuantity: attemptQuantity,
            search_type: "Humming",
        },
        onSubmit: handleSubmit,
    });

    return (
        <form 
            className="start-config"
            onSubmit={formik.handleSubmit}
        >
            <h3 className="start-config__title"> Start configuration  </h3>

            <div className="form-group">
                <label htmlFor="attemptQuantity">Attempt Quantity</label> 
                <input 
                    className="start-config__input form-control"
                    id="attemptQuantity"
                    name="attemptQuantity"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.attemptQuantity}
                />
                <small id="attemptQuantity" className="form-text text-muted">How many attempts we have befor knockout ?)</small>
            </div>

            <div className="form-group">
                <label>Search Type</label>
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="search_type" 
                        id="search_type1" 
                        value="Humming" 
                        onChange={formik.handleChange}
                        checked={formik.values.search_type === "Humming"}
                    />
                    <label className="form-check-label" htmlFor="search_type1">
                        Humming
                    </label>
                </div>
                    <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="search_type" 
                        id="search_type2" 
                        value="Lyrics" 
                        onChange={formik.handleChange}
                    />
                    <label className="form-check-label" htmlFor="search_type2">
                        Lyrics
                    </label>
                </div>
            </div>
            
            <button className="start-config__button btn btn-info" type="submit"> Start! </button>
        </form>

    )
} 