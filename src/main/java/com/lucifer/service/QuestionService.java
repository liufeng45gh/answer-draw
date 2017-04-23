package com.lucifer.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lucifer.dao.AnswerResultDao;
import com.lucifer.dao.QuestionDao;
import com.lucifer.model.Answer;
import com.lucifer.model.AnswerResult;
import com.lucifer.model.Question;
import com.lucifer.utils.RandomUtil;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;
import java.util.UUID;

/**
 * Created by liufx on 17/4/5.
 */
@Component
public class QuestionService {

    @Resource
    private QuestionDao questionDao;

    @Resource
    private AnswerResultDao answerResultDao;

    private ObjectMapper objectMapper = new ObjectMapper();

    public String submitAnswer(List<Answer> answerList) throws JsonProcessingException {
        String answerToken = RandomUtil.getNextAccount();
                //UUID.randomUUID().toString();
        AnswerResult answerResult = new AnswerResult();
        answerResult.setToken(answerToken);
        String content = objectMapper.writeValueAsString(answerList);
        answerResult.setContent(content);

        Integer score = 0;
        Integer rightCount = 0;

        List<Question> questionList = questionDao.questionList();

        for (Answer answer: answerList) {
            Question question = this.getQuestionById(answer.getId(),questionList);
            if (null == question) {
                continue;
            }
            if (answer.getRightKey().equals(question.getRightKey())){
                score = score + question.getScore();
                rightCount = rightCount +1 ;
            }
        }
        answerResult.setRightCount(rightCount);
        answerResult.setScore(score);
        answerResultDao.insertAnswerResult(answerResult);
        return answerToken;

    }

    public Question getQuestionById(Long id,List<Question> questionList){
        for (Question question: questionList){
            if (question.getId().equals(id)) {
                return question;
            }
        }
        return null;
    }
}
