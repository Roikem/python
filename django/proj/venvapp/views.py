from django.shortcuts import render
from venvapp.models import Elem, Fangse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.

def get_atom(request, atom):#查询主元素
	req_atom = find(atom)
	data = {'req_atom': req_atom}
	# return render(request, 'venvapp/get_atom.html', data)
	return JsonResponse(data)


def get_activityatom(request, activity_atom):#查询放射性元素
	req_atom = find_activity(activity_atom)
	data = {'req_atom': req_atom}
	return JsonResponse(data)


def get_pic_activityatom(request, pic_activity_atom):#查询衰败纲图
	filename=''
	with open('venvapp/templates/deacy_pic/a.json') as rfile:
		all_url = json.loads(rfile.read())
		activity_atom=pic_activity_atom.capitalize()
		filename = '{}Pic.html'.format(activity_atom)
		#没有时
		if filename not in all_url:
			return render(request, 'deacy_pic/none.html')
	url = 'deacy_pic/'+filename
	return render(request, url)


def find(atom):
	atom = atom.capitalize()
	try:
		inf_ReAtom = Elem.objects.get(symble=atom)
	except:
		return '查询错误'

	re_inf = {}
	pr_col = ['原子序数', '元素符号', '中文名称', '相对原子质量', '密度', '熔点', '沸点', '同位素及放射性','状态','来源','用途']
	db_col = ['inf_ReAtom.order_num', 'inf_ReAtom.symble', 'inf_ReAtom.c_name',\
			'inf_ReAtom.rela_weight', 'inf_ReAtom.density', 'inf_ReAtom.melt_point',\
			'inf_ReAtom.boil_point', 'inf_ReAtom.isotope','inf_ReAtom.status','inf_ReAtom.source','inf_ReAtom.use_for']
	for i in range(0, 11):
		try:
			re_inf[pr_col[i]] = eval(db_col[i])
		except:
			re_inf[pr_col[i]] = ''
	return re_inf


def find_activity(atom):
	atom = atom.capitalize()
	atom = ' {} \r'.format(atom)
	try:
		a = Fangse.objects.get(symble=atom)
	except:
		return '暂无数据'
	dic={}
	dic['核素符号'] = a.symble[:-1]
	dic['相对原子质量'] = a.rela_weight[:-1]
	dic['放射子体'] = a.ch_body[:-1]
	dic['放射能量'] = a.energy[:-1]
	dic['放射母体'] = a.mo_body[:-1]
	dic['半衰期'] = a.half_t[:-1]
	return dic


def menu(request):
	return render(request, 'element_search/3d/index.html')


def index(request):
	return render(request, 'element_search/menu.html')


