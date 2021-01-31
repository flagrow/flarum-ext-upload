import app from 'flarum/app';
import Component from 'flarum/Component';
import Button from 'flarum/components/Button';
import FileManagerModal from './FileManagerModal';

export default class FileManagerButton extends Component {
    view() {
        return Button.component({
            className: "Button fof-upload-button Button--icon",
            onclick: this.fileManagerButtonClicked.bind(this),
            icon: 'fas fa-photo-video',
            title: app.translator.trans('fof-upload.forum.buttons.media')
        });
    }

    /**
     * Show tooltip on hover
     * 
     * @param {*} vnode 
     */
    oncreate(vnode) {
        super.oncreate(vnode);
  
        // Add tooltip
        this.$().tooltip();
    }

    /**
     * Event handler for upload button being clicked
     *
     * @param {PointerEvent} e
     */
    fileManagerButtonClicked(e) {
        e.preventDefault();

        // Open dialog
        app.modal.show(FileManagerModal, {
            selectFile: true,
            uploader: this.attrs.uploader
        });
    }
}
