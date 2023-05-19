import React from 'react';

const AddToy = () => {
    return (
        <div>
            <form>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
                </div>
                
            </form>
        </div>
    );
};

export default AddToy;