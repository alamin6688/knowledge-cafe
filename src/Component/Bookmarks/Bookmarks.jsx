import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 rounded-3xl ml-4 mt-4">
            <div>
                <h3 className="text-3xl text-center p-4 bg-slate-200 rounded-xl m-4">
                    Reading Time: {readingTime}
                </h3>
            </div>
            <h2 className="text-3xl text-center p-4">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;