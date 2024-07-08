def get_chapter_title(page_number):
    # Define the mapping of chapters to page ranges
    chapters = [
        ("Introducing C", 1, 8),
        ("C Fundamentals", 9, 36),
        ("Formatted Input/Output", 37, 52),
        ("Expressions", 53, 72),
        ("Selection Statements", 73, 98),
        ("Loops", 99, 124),
        ("Basic Types", 125, 160),
        ("Arrays", 161, 182),
        ("Functions", 183, 218),
        ("Program Organization", 219, 240),
        ("Pointers", 241, 256),
        ("Pointers and Arrays", 257, 276),
        ("Strings", 277, 314),
        ("The Preprocessor", 315, 348),
        ("Writing Large Programs", 349, 376),
        ("Structures, Unions, and Enumerations", 377, 412),
        ("Advanced Uses of Pointers", 413, 456),
        ("Declarations", 457, 482),
        ("Program Design", 483, 508),
        ("Low-Level Programming", 509, 528),
        ("The Standard Library", 529, 538),
        ("Input/Output", 539, 588),
        ("Library Support for Numbers and Character Data", 589, 626),
        ("Error Handling", 627, 640),
        ("International Features", 641, 676),
        ("Miscellaneous Library Functions", 677, 704),
        ("Additional C99 Support for Mathematics", 705, 734),
        ("C Operators", 735, 736),
        ("C99 versus C89", 737, 742),
        ("C89 versus K&R C", 743, 746),
        ("Standard Library Functions", 747, 800),
        ("ASCII Character Set", 801, 802),
        ("Bibliography", 803, 806),
        ("Index", 807, 808)
    ]
    page_number = page_number - 25
    for chapter, start, end in chapters:
        if start <= page_number <= end:
            return chapter
    return "Unknown Chapter"

def get_all_chapter_title():
    chapters = [
        ("Introducing C", 1, 8),
        ("C Fundamentals", 9, 36),
        ("Formatted Input/Output", 37, 52),
        ("Expressions", 53, 72),
        ("Selection Statements", 73, 98),
        ("Loops", 99, 124),
        ("Basic Types", 125, 160),
        ("Arrays", 161, 182),
        ("Functions", 183, 218),
        ("Program Organization", 219, 240),
        ("Pointers", 241, 256),
        ("Pointers and Arrays", 257, 276),
        ("Strings", 277, 314),
        ("The Preprocessor", 315, 348),
        ("Writing Large Programs", 349, 376),
        ("Structures, Unions, and Enumerations", 377, 412),
        ("Advanced Uses of Pointers", 413, 456),
        ("Declarations", 457, 482),
        ("Program Design", 483, 508),
        ("Low-Level Programming", 509, 528),
        ("The Standard Library", 529, 538),
        ("Input/Output", 539, 588),
        ("Library Support for Numbers and Character Data", 589, 626),
        ("Error Handling", 627, 640),
        ("International Features", 641, 676),
        ("Miscellaneous Library Functions", 677, 704),
        ("Additional C99 Support for Mathematics", 705, 734),
        ("C Operators", 735, 736),
        ("C99 versus C89", 737, 742),
        ("C89 versus K&R C", 743, 746),
        ("Standard Library Functions", 747, 800),
        ("ASCII Character Set", 801, 802),
        ("Bibliography", 803, 806),
        ("Index", 807, 808)
    ]
    titles = [title for title, start, end in chapters]
    return titles
