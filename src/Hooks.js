import React, { useState, useEffect } from 'react';

function handleSearchValueChange(value) {
    setSearchValue(value);
}


function handleSearchValueSubmit(event) {
    event.preventDefault();
    setSearchResults(getGlobalSearch(searchValue))
}