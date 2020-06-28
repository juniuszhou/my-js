function getError() {
    throw "Error"
}

try {
    console.log(getError());
} catch(err) {
    console.log("Get a error as ", err);
} finally {
    console.log("merged fork here.")
}

