import React, { Component, useEffect, useState } from 'react';
export async function fetchApi(params) {

    var rs = await fetch(`http://localhost/post/0/50`);
    var responjson = await rs.json();

    return responjson;
}