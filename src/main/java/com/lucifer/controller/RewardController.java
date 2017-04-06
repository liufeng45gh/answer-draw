package com.lucifer.controller;

import com.lucifer.dao.RewardDao;
import com.lucifer.model.Reward;
import com.wordnik.swagger.annotations.ApiOperation;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by liufx on 17/4/5.
 */
@Controller
public class RewardController {

    @Resource
    private RewardDao rewardDao;

    @ApiOperation(value = "所有奖励")
    @RequestMapping(value="/all-reward",method= RequestMethod.GET)
    @ResponseBody
    public List<Reward> rewardList(){
        return rewardDao.rewardList();
    }
}
