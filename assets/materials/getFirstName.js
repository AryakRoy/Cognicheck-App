const getInitials = (name) => {
    if (name != "") {
        const words = name.split(" ");
        const firstname = words[0]
        return firstname
    }
}

export default getInitials