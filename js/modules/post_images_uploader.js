module.exports = {

    upload_images: function (req, res) {
        let chosen_folder = req.body.folder_name;
        let success_file_moved;

        try{
            let uploaded_images = req.files.images;
            let current_img_name;

            if (Array.isArray(uploaded_images)) {
                for(let i = 0; i < uploaded_images.length; i++) {
                    current_img_name = uploaded_images[i]['name'];
                    uploaded_images[i].mv(__dirname + '\\images\\' + chosen_folder + '\\' + current_img_name);
                }
            } else {
                current_img_name = uploaded_images['name'];
                uploaded_images.mv(__dirname + '\\images\\' + chosen_folder + '\\' + current_img_name);
            }
            success_file_moved = true;
        } catch (e) {
            success_file_moved = false;
        }

        let success = res.statusCode === 200 && success_file_moved;
        res.redirect('/upload_images?success=' + success);
    }
};
