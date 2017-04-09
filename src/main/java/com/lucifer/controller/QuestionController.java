package com.lucifer.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.lucifer.dao.AnswerResultDao;
import com.lucifer.dao.QuestionDao;
import com.lucifer.model.Answer;
import com.lucifer.model.AnswerResult;
import com.lucifer.model.Question;
import com.lucifer.service.QuestionService;
import com.lucifer.utils.Md5Utils;
import com.lucifer.utils.RandomUtil;
import com.lucifer.utils.Result;
import com.wordnik.swagger.annotations.ApiOperation;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by liufx on 17/4/5.
 */
@Controller
public class QuestionController {

    @Resource
    private QuestionDao questionDao;

    @Resource
    private QuestionService questionService;

    @Resource
    private AnswerResultDao answerResultDao;

    @ApiOperation(value = "所有问题")
    @RequestMapping(value="/all-question",method= RequestMethod.GET)
    @ResponseBody
    public List<Question> questionList(){
        return  questionDao.questionList();
    }

    @RequestMapping(value="/start-answer",method= RequestMethod.GET)
    public String startAnswer(){
       return "start-answer";
    }

    @RequestMapping(value="/",method= RequestMethod.GET)
    public String index(){
        return "index";
    }

    @RequestMapping(value="/submit-answer",method= RequestMethod.POST)
    @ResponseBody
    public Result submitAnswer(@RequestBody List<Answer> answerList) throws JsonProcessingException {
        Map<String,Object> resultMap = new HashMap<>();
        //resultMap.put("answer-token", RandomUtil.getNextAccount());

        String answerToken = questionService.submitAnswer(answerList);

        return Result.ok(answerToken);
    }

    @RequestMapping(value="/get-score",method= RequestMethod.GET)
    public String getScore(@CookieValue(value = "answerToken") String token,HttpServletRequest request){
        AnswerResult answerResult = answerResultDao.getAnswerResult(token);
        if (null == answerResult) {
            return "redirect:/start-answer";
        }
        request.setAttribute("answerResult",answerResult);
        String nickTitle = null;
        String description = null;
        if (answerResult.getRightCount() < 3) {
            nickTitle = "投行菜鸟";
            description = "本次共答对"+answerResult.getRightCount()+"道题  （2题及以下者）,你还是投行菜鸟,需要多多向前学习呦!";
        } else if (answerResult.getRightCount() < 6) {
            nickTitle = "投行新手";
            description = "本次共答对"+answerResult.getRightCount()+"道题  （3-5题）,你还是投行新手,争取早日成为投行老兵呦!";
        }else if (answerResult.getRightCount() < 8) {
            nickTitle = "投行老兵";
            description = "本次共答对"+answerResult.getRightCount()+"道题  （6-7题）,功夫不负有心人,恭喜你已经成为投行老兵!";
        }else {
            nickTitle = "投行大佬";
            description = "本次共答对"+answerResult.getRightCount()+"道题  （8-9题）,恭喜您获得投行大佬称号,膜拜中! 你可以获得一次抽奖机会赶快试下手气吧!";
        }
        request.setAttribute("nickTitle",nickTitle);
        request.setAttribute("description",description);
        return "get-score";
    }

    @RequestMapping(value="/get-reward",method= RequestMethod.GET)
    public String getReward(@CookieValue(value = "answerToken") String token,HttpServletRequest request){
        AnswerResult answerResult = answerResultDao.getAnswerResult(token);
        if (null == answerResult) {
            return "redirect:/start-answer";
        }
        if (answerResult.getRightCount() < 8) {
            return "redirect:/start-answer";
        }
        return "get-reward";
    }
}
