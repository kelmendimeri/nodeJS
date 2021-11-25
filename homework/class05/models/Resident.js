let residents = [
    {
        _id: 1,
        name: "Kelmend Imeri",
        hasCar: false,
        isBoomer: true
    }
];

const getAllResidents = async() => {
    return residents;
}

const getResident = async(id)=>{
    return residents.find((resident)=> id === resident._id);
};

const addResident = async(newResidentInfo)=>{
    const newResident = {
        _id: residents.length + 1,
        name: newResidentInfo.name,
        hasCar: newResidentInfo.hasCar,
        isBoomer: newResidentInfo.isBoomer
    };
      residents.push(newResident)
};

const updateResident = async (id,newResidentInfo)=>{
    residents = residents.map((resident)=>{
        if (resident._id === id) {
            return {
              _id: id,
              name: newResidentInfo.name,
              hasCar: newResidentInfo.hasCar,
              isBoomer: newResidentInfo.isBoomer,
            };
          } else {
            return resident;
          }
    });
};

const deleteResident = async (id) => {
    residents = residents.filter((resident)=>{
        resident._id !== id;
    });
};


module.exports = {
    getAllResidents,
    getResident,
    addResident, 
    updateResident, 
    deleteResident};