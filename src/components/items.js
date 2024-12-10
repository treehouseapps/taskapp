const Items = ({ array, remove, edit }) => {

    if (array.length == 0) {
        return (
            <div className="ul" id="ul">
                <div className="empty">
                    <div className="empty-body">
                        No Data  Found
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div id="ul" className="ul">

                {array.map((item, index) => (
                    <div key={index}>
                        <div className="item"> <i className="bi icon bi-bookmark-check"></i> {item}</div>
                        <div className="btnlist">
                            <button className="btn btn-primary bi bi-pencil-square" aria-label="Edit" onClick={() => edit(index)}></button>
                            <button className="btn btn-primary bi bi-trash" onClick={() => remove(index)}></button></div>
                    </div>
                ))}

            </div>
        );
    }
}

export default Items;