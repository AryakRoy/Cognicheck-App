const getInitials = (name) => {
    if (name != "") {
        const words = name.split(" ");
        let initials = ""
        for (word of words) {
            initials += word.charAt(0).toUpperCase();
        }
        return initials;
    }
}

export default getInitials