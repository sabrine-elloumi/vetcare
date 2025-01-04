function showOtherField() {
    const petType = document.getElementById('pet-type');
    const otherAnimalRow = document.getElementById('other-animal-row');
    if (petType.value === 'autre') {
        otherAnimalRow.style.display = 'table-row';
    } else {
        otherAnimalRow.style.display = 'none';
    }
}
