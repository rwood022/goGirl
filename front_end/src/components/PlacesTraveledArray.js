import React, { useState } from 'react';
import PlacesTraveledForm from './PlacesTraveledForm';
import PlacesTraveled from './S3';

function PlacesTraveledArray() {
    const[placesTraveled, setPlacesTraveled]
 = useState([])
// Add a Place
const addPlaceTraveledItem = (item) => {
    console.log (item);

// check whether the text is empty
if (!item.text) {
    return;
}
// add new place to the list
const newPlaceTraveled = [item.text, ...PlacesTraveled];
console.log(newPlaceTraveled);

setPlacesTraveled(newPlaceTraveled);
};

// Edit place traveled

const editPlaceTraveled = (itemId, newValue) => {
    if (!newValue.text) {
        return;
    }
setPlacesTraveled((prev) => {
    prev.map((map) => (item.ik ===itemId ? newValue : item))
});
};

return (
    <div>
        <h2>Where have you been?</h2>
        <PlacesTraveledForm onSubmit={addPlacesTraveledItem} />
        <PlacesTraveled
            placesTraveled={placesTraveled}
            completePlacesTraveledItem={completePlacesTraveledItem}
            editPlaceTraveled={editPlaceTraveled}
            ></PlacesTraveled>
    </div>
);
}

export default PlacesTraveledArray;