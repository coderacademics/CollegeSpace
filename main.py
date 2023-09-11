import re
import long_responses as long


def message_probability(user_message, recognised_words, single_response=False, required_words=[]):
    message_certainty = 0
    has_required_words = True

    for word in user_message:
        if word in recognised_words:
            message_certainty += 1

    percentage = float(message_certainty) / float(len(recognised_words))

    for word in required_words:
        if word not in user_message:
            has_required_words = False
            break

    if has_required_words or single_response:
        return int(percentage * 100)
    else:
        return 0


def check_all_messages(message):
    highest_prob_list = {}

    def response(bot_response, list_of_words, single_response=False, required_words=[]):
        nonlocal highest_prob_list
        highest_prob_list[bot_response] = message_probability(message, list_of_words, single_response, required_words)

    response('Hello!', ['hello', 'hi', 'hey', 'sup', 'heyo'], single_response=True)
    response('yeah sure, go ahead.', ['can', 'i', 'ask', 'will', 'you', 'something'], single_response=True)
    response('Nice to hear that. so how may I help you?', ['i', 'am', 'fine', 'ok', 'good', 'all'], single_response=True)
    response('See you next time!', ['bye', 'goodbye'], single_response=True)
    response('I\'m doing fine, and you?', ['how', 'are', 'you', 'doing'], required_words=['how'])
    response('You\'re welcome!', ['thank', 'thanks'], single_response=True)
    response('Thank you!', ['i', 'love', 'sccbot'], required_words=['love', 'sccbot'])


    response(long.R_ADVICE, ['give', 'advice', 'on', 'please'], required_words=['advice'])
    response(long.R_SCC_ADDRESS, ['what', 'where', 'is', 'location', 'address', 'located', 'scottish', 'church', 'college'], required_words=['scottish', 'church'])
    response(long.R_BC_ADDRESS, ['what', 'where', 'is', 'location', 'address', 'located', 'bethune', 'college'], required_words=['bethune'])
    # response(long.R_FACULTY, ['who', 'are', 'teachers', 'faculty', 'cs', 'professors'], single_response=True)
    response(long.R_SCC_MA_HOD, ['who', 'tell', 'is', 'name', 'of', 'maths', 'mathematics', 'hod', 'scottish', 'church', 'college'], required_words=['hod', 'scottish', 'church'])
    response(long.R_SCC_MA_HOD_QUALI, ['can', 'tell', 'about', 'hod', 'mathematics', 'maths', 'sudebi', 'qualicifations', 'scottish', 'church', 'college'], required_words=['hod', 'qualifications'])
    response(long.R_SCC_CS_HOD_QUALI, ['can', 'tell', 'about', 'hod', 'computer', 'science', 'cs', 'moumita', 'qualicifations', 'scottish', 'church', 'college'], required_words=['hod', 'qualifications',"scottish","church","college"])
    response(long.R_SCC_CS_RATIO, ['can', 'tell', 'about', 'what', 'ratio', 'computer', 'science', 'cs', 'student', 'teacher', 'student-teacher', 'scottish', 'church', 'college'], required_words=['ratio'])
    response(long.R_SCC_MA_RATIO, ['can', 'tell', 'about', 'what', 'ratio', 'mathematics', 'maths', 'student', 'teacher', 'student-teacher', 'scottish', 'church', 'college'], required_words=['ratio'])
    response(long.R_SCC_CS_HOD, ['who', 'tell', 'is', 'name', 'of', 'computer', 'cs', 'science', 'hod', 'scottish', 'church', 'college'], required_words=['hod', 'scottish', 'church'])
    response(long.R_COLLEGE, ['can', 'write', 'tell', 'essay', 'about', 'college', 'scottish', 'church', 'college'], required_words=['write', 'scottish', 'church'])
    response(long.R_SCC_PRINCIPAL, ['can', 'who', 'tell', 'about', 'prinpical', 'is', 'college', 'of', 'scottish', 'church', 'college'], required_words=['principal', 'scottish', 'church'])
    response(long.R_BC_PRINCIPAL, ['can', 'who', 'tell', 'about', 'prinpical', 'is', 'college', 'of', 'bethune', 'college'], required_words=['principal', 'bethune'])
    response(long.R_BC_MA_HOD, ['who', 'tell', 'is', 'name', 'of', 'maths', 'mathematics', 'hod', 'bethune', 'college'], required_words=['hod', 'bethune'])
    response(long.R_BC_MA_HOD_QUALI, ['can', 'tell', 'about', 'hod', 'mathematics', 'maths', 'sanjib', 'qualicifations', 'bethune', 'college'], required_words=['hod', 'qualifications'])
    response(long.R_BC_CS_HOD_QUALI, ['can', 'tell', 'about', 'hod', 'computer', 'science', 'cs', 'Krishanu', 'qualicifations', 'bethune', 'college'], required_words=['hod', 'qualifications'])
    response(long.R_BC_CS_RATIO, ['can', 'tell', 'about', 'what', 'ratio', 'computer', 'science', 'cs', 'student', 'teacher', 'student-teacher', 'bethune', 'college'], required_words=['ratio'])
    response(long.R_BC_MA_RATIO, ['can', 'tell', 'about', 'what', 'ratio', 'mathematics', 'maths', 'student', 'teacher', 'student-teacher', 'bethune', 'college'], required_words=['ratio'])
    response(long.R_BC_CS_HOD, ['who', 'tell', 'is', 'name', 'of', 'computer', 'cs', 'science', 'hod', 'bethune', 'college'], required_words=['hod', 'bethune'])    

    best_match = max(highest_prob_list, key=highest_prob_list.get)
    
    #print(f'Best match = {best_match} | Score: {highest_prob_list[best_match]}')

    #return long.unknown() if highest_prob_list[best_match] < 1 else return best_match
    if highest_prob_list[best_match] < 1:
        return long.unknown()
    else:
        return best_match


def get_response(user_input):
    split_message = re.split(r'\s+|[,;?!.-]\s*', user_input.lower())
    response = check_all_messages(split_message)
    return response


#while True:
#    print('Bot: ' + get_response(input('You: ')))
